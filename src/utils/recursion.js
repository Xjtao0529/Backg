function getDateType(data) {
  const dataType = Object.prototype.toString.call(data)

  const mapType = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object'
  }
  return mapType[dataType]
}
function deeCopy(data) {
  let params = null
  const str = getDateType(data)
  if (str === 'array') {
    params = []
    for (let i = 0; i < data.length; i++) {
      params.push(deeCopy(data[i]))
    }
  } else if (str === 'object') {
    params = {}
    for (const k in data) {
      params[k] = deeCopy(data[k])
    }
  } else {
    return data
  }
  return params
}

export default {
  deeCopy
}
