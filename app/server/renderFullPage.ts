export const renderFullPage = (body, preloadedState) => {
  return `
    <!DOCTYPE html>
    <html lang="es">
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="root">${body}</div>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // https://redux.js.org/recipes/server-rendering/#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
            /</g,
            '\\u003c'
          )}
        </script>
        <script src="ssr.js"></script>
      </body>
    </html>
    `
}