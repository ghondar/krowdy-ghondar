
class Notify {
  constructor() {
    if(typeof window !== 'undefined') {
      this.containner = Notify.createContainer()
      this.divNotification = Notify.createContainerNotify()
      this._init()
      this.index = 1
      this.arr = []
    }
  }

  _init() {
    if(window && window.document) {
      const containner = this.containner
      const containnerNotify = this.divNotification
      document.body.appendChild(containner)

      const sheet = document.createElement('style')
      sheet.innerHTML = `
        #divNotification {
          display: flex;
          flex-direction: column-reverse;
          align-items: center;
        }
        .notifyCustom {
          z-index: 9999;
          border-radius: 3px;
          box-sizing: border-box;
          color: #fff;
          font-size: 1rem;
          background: #000;
          text-align: center;
          padding: 12px 40px;
          opacity: 0;
          display: inline;
          margin-bottom: 10px;
          boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)';
          border-radius: 5px;
        }
        #notifyContainer{
          position: fixed;
          top: 20px;
          right: 0;
          margin: auto;
          left: 0;
          z-index: 2000;
          pointer-events: none;
        }
      `
      containner.appendChild(sheet)
      containner.appendChild(containnerNotify)
    } else {
      throw new Error('Error - Reader Window')
    }
  }

  // setters
  static createContainer() {
    const container = document.getElementById('notifyContainer')
    if(container) return

    const notifyContainer = Object.assign(document.createElement('div'), {
      id: 'notifyContainer'
    })

    return notifyContainer
  }

  static createContainerNotify() {
    const hasDivNotification = document.getElementById('divNotification')
    if(hasDivNotification) return

    const divNotification = Object.assign(document.createElement('div'), {
      id: 'divNotification'
    })

    return divNotification
  }

  setNotify(data) {
    let bg = '#07bc0c'
    switch (data.type) {
      case 'warning':
        bg = '#F09200'
        break
      case 'error':
        bg = '#FF322C'
        break

      default:
        bg = '#13BF5F'
        break
    }
    const item = Object.assign(document.createElement('div'), {
      className: 'notifyCustom',
      id       : `notify-${this.index}`,
      innerHTML: data.message,
      style    : `background-color: ${bg}`
    })

    return item
  }

  updateIndex() {
    this.index = this.index + 1
  }

  // animations
  animateOut(id) {
    const target = document.getElementById(`notify-${id}`)
    const targetAnimation = target.animate([
      { opacity: '1' },
      { opacity: '0' }
    ], {
      duration: 500
    })

    targetAnimation.addEventListener('finish', () => {
      target.style.opacity = '0'
      target.remove()
    })
  }

  animateIn() {
    const target = document.getElementById(`notify-${this.index}`)
    const targetAnimation = target.animate([
      { opacity: '0' },
      { opacity: '.9' }
    ], {
      duration: 500,
      id      : `notify${this.index}`
    })

    targetAnimation.addEventListener('finish', () => {
      target.style.opacity = '1'
    })
    this.updateIndex()
  }

  // observe
  subscribe(subscriptor) {
    const data = { ...subscriptor, id: this.index }

    this.arr.push(data)
    const containner = this.divNotification
    const element = this.setNotify(subscriptor)
    containner.appendChild(element)
    this.animateIn()
    this.unsubscribe(data)
  }

  unsubscribe(subscriptor) {
    setTimeout(() => {
      this.arr = this.arr.filter(item => item.id !== subscriptor.id)
      this.animateOut(subscriptor.id)
    }, subscriptor.time)
  }

  // notify(event) {
  //   this.unsubscribe(event)
  // }
}

class Message {
  constructor() {
    if(!Message.instance)
      this.nt = new Notify()
    else
      return Message.instance
  }
  success(message, option = { time: 2000 }) {
    this.nt.subscribe({ message, time: option.time, type: 'success' })
  }
  warning(message, option = { time: 2000 }) {
    this.nt.subscribe({ message, time: option.time, type: 'warning' })
  }
  error(message, option = { time: 2000 }) {
    this.nt.subscribe({ message, time: option.time, type: 'error' })
  }
}

const instance = new Message()
Object.freeze(instance)

export default instance

