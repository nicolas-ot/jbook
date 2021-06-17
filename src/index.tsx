import * as esbuild from "esbuild-wasm";
import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { unpkgPathPlugin } from "./plugins/unpkg-path-plugin";
import { fetchPlugin } from "./plugins/fetch-plugin";
import "bulmaswatch/superhero/bulmaswatch.min.css";

import CodeEditor from "./components/code-editor";

const App = () => {
  const ref = useRef<any>();
  const iframe = useRef<any>();
  const [input, setInput] = useState("");

  const startService = async () => {
    ref.current = await esbuild.startService({
      worker: true,
      wasmURL: "/esbuild.wasm",
    });
  };
  useEffect(() => {
    startService();
  }, []);

  const html = `
  <html>
    <head></head>
    <body>
      <div id="root"></div>
      <script>
        window.addEventListener("message", (event) => {
          eval(event.data);
        }, false);
      </script>
    </body>
  </html>

  `;

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (!ref.current) {
        return;
      }

      iframe.current.srcdoc = html;

      const result = await ref.current.build({
        entryPoints: ["index.js"],
        bundle: true,
        write: false,
        plugins: [unpkgPathPlugin(), fetchPlugin(input)],
        define: {
          "process.env.NODE_ENV": '"production"',
          global: "window",
        },
      });

      // setCode(result.outputFiles[0].text);
      // this is the code that has been built by the plugins and esbuild

      // eval(result.outputFiles[0].text);
      // naive approach on executing files in the browser, because it can be harmful
      // for example, when the text is document.body.innerHTML = "";

      // console.log(iframe.current.contentWindow);
      // this is the same as parent.postMessage in console
      // this is to trigger the message event listener, which will then execute the eval
      // is also a way to send the text to the iframe, even though the access are not allowed
      iframe.current.contentWindow.postMessage(result.outputFiles[0].text, "*");
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [input, html]);

  // const html = `
  //   <script>
  //     ${code}
  //   </script>
  // `;
  // this is dangerous when the input is (<script>...</script>)

  return (
    <div>
      <CodeEditor
        initialValue="tes"
        onChange={(code: string) => {
          setInput(code);
          // onClick(e.target.value);
        }}
      ></CodeEditor>
      <iframe
        ref={iframe}
        srcDoc={html}
        sandbox="allow-scripts"
        title="preview"
      ></iframe>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
