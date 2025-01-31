// Generate an 8 character random string
export function generateID(): string {
  return Math.random().toString(36).substring(2, 10)
}

export function hasClassInTree(element: HTMLElement, className: string) {
  function hasClass(e: HTMLElement, c: string) {
    // If the element has the class return element
    if (c && e && e.classList && e.classList.contains(c)) {
      return e
    }

    // If the element has a dataset id of the class return element
    if (c && e && e.dataset && e.dataset.id && e.dataset.id === className) {
      return e
    }

    return null
  }

  function parentByClass(e: any, c: string): any {
    if (!e || e === (document as any)) {
      return null
    } else if (hasClass(e, c)) {
      return e
    } else {
      return parentByClass(e.parentNode, c)
    }
  }

  return hasClass(element, className) || parentByClass(element, className)
}

export function debounce(func: (...params: any[]) => void, wait = 50, immediate = false): () => void {
  let timeout: any
  return function (this: any, ...args: any[]) {
    const context = self
    const later = () => {
      timeout = null
      if (!immediate) {
        func.apply(context, args)
      }
    }
    const callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) {
      func.apply(context, args)
    }
  }
}

export function isEqual(a: any, b: any) {
  return JSON.stringify(a) === JSON.stringify(b)
}

export function kebabCase(str: string) {
  const result = str.replace(/[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g, (match) => '-' + match.toLowerCase())
  return str[0] === str[0].toUpperCase() ? result.substring(1) : result
}
