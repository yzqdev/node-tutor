function getCookies() {
  let pairs = document.cookie.split(";");
  let cookies = new Map();
  for (let i = 0; i < pairs.length; i++) {
    let pair = pairs[i].split("=");
    cookies.set(((pair[0] + '').trim()), pair[1])
  }
  return cookies;
}

function getCookiesObject() {
  let pairs = document.cookie.split(";");
  let cookies = []
  for (let i = 0; i < pairs.length; i++) {
    let pair = pairs[i].split("=");
    cookies.push([(pair[0] + '').trim(), pair[1]]
    )

  }
  return cookies;
}


const Cookie =
  {
    get: name => {
      let c = document.cookie.match(`(?:(?:^|.*; *)${name} *= *([^;]*).*$)|^.*$`)[1]
      if (c) return decodeURIComponent(c)
    }
    , set: (name, value, opts = {}) => {
      if (opts.days) opts['max-age'] = opts.days * 60 * 60 * 24
      opts = Object.entries(opts).reduce((str, [k, v]) => str + `; ${k}=${v}`, '')
      document.cookie = `${name}=${encodeURIComponent(value)}` + opts
    }
    , delete: (name, path) => Cookie.set(name, '', -1, path)
  }

function setCookies(cookieMap) {
  cookieMap.forEach((value, key) => {
    Cookie.set(key, value)
  })

}
