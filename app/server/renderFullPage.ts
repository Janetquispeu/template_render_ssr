export const html = ({ body, styles, scripts, preloadedState }) => {
  return `
    <!DOCTYPE html>
    <html lang="es">
      <head>
        <title>Redux Universal Example</title>
        ${styles}
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
        ${Object.keys(scripts.assetsByChunkName)
          .map((entry) => `<script type="text/javascript" src="${process.env.PATH_STATIC}/static/public/${scripts.assetsByChunkName[entry][0]}"></script>`)
          .join('\n')
        }
      </body>
    </html>
    `
}