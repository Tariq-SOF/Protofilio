module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },


  <section className=" flex right-section">
        {["aa", "bb", "cc", 1, 7].map((item) => {
          return (
            <article key={item} className="  card">
              <img width={266} src="./1.jpg" alt="" />

              <div style={{ width: "266px" }} className="box">
                <h1 className="title">Landing Page 2 </h1>
                <p className="sub-title">
                  Lorem ipsum dolor sit amet consectetur elit adipisicing . Ex
                  tempore dolor in, accusantium laudantium accusamus.
                </p>

                <div className="flex icons">
                  <div style={{ gap: "11px" }} className="flex">
                    <div className="icon-link"></div>
                    <div className="icon-github"></div>
                  </div>

                  <a className="link flex" href="">
                    more
                    <span
                      style={{ alignSelf: "end" }}
                      className="icon-arrow-right"
                    ></span>
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </section>
}
