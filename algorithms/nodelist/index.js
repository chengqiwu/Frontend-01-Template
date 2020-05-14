function List() {
  let Node = function(element) {
    this.element = element
    this.next = null
  }

  let head = null

  let length = 0

  this.getList = function () {
    return head;
  };
  this.search = function (element) {
    let p = head
    if (!p) return false
    while(p) {
      if (p.element === element) return true
      p = p.next
    }
    return false
  };
  this.append = function (element) {
    let node = new Node(element),
      p = head;
    if (!p) {
      p = element
      length += 1;
      return
    }
    while (p.next) {
      p = p.next
    }
    p.next = node
    length+=1
  };
  this.insert = function (position, element) {
    const node = new Node(element)
    if(position <= length && position >= 0) {
      node.next = head
      head = node
    } else {
      return null
    }
  };
  this.remove = function (element) {};
  this.isEmpty = function () {};
  this.size = function () {};
}