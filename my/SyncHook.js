class SyncHook {
  constructor(args) {
    this.args = Array.isArray(args) ? args : [];
    this.taps = []
  }

  call(...args) {
    console.log('taps', ...this.taps)
    console.log('this.agrs', this.args)
    this._call = this.compile({
      taps: this.taps,
      args: this.args,
      type: 'sync'
    })
    return this._call(...args)
  }
  tap(option, fn) {
    if (typeof option === 'string') {
      option = { name: option }
    }
    const tapInfo = { ...option, type: 'sync', fn }
    this.taps.push(tapInfo)
  }

  compile({args, taps, type}) {
    const getHeader = () => {
      let code = ''
      code += `var taps = this.taps;\n`;
      return code
    }
    const getContent = () => {
      let code = ''
      for(let i = 0; i < taps.length; i++) {
        code += `var fn${i}=taps[${i}].fn;\n`;
        code += `fn${i}(${args.join(',')});\n`;
      }
      return code
    }
    return new Function(args.join(','), getHeader() + getContent())    
  }
}

module.exports = SyncHook