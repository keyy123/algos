class Node {
  constructor(value) {
    this.value = value;
    this.next = null;  
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  appendNode(node) {
    if (this.head === null) {
      this.head = node
    } else if (this.head != null && this.head.next === null) {
      this.head.next = node
    } else {
      let p = this.head
      while (p.next != null) {
        p = p.next
      }
      p.next = node
    }

   //Goal: Append the current node to the end of the current linked list 
    
    //S1.) Traverse through the list 
    
    //S2.) Determine if we are at the end of the linked list

    //S3.) Append Node to end of the linked list
    
  }
}


// function appendNode(node1, node2) {
//   let currentNode = node1
//   currentNode.next = node2
//   return currentNode
// }

function removeNode(node) {
  if (node.next != null) {
    node.next = null
    console.log("next node is removed")
  } else {
    console.log("No nodes removed")
  }
}


    //if only one node set as head if no previous value
    //if only 




let a = new Node(5)
let b = new Node(6)
let c = new Node(7)
let list = new LinkedList()
list.appendNode(a)
list.appendNode(b)
list.appendNode(c)
//appendNode(a, b)
//appendNode(b, c)
//console.log(removeNode(b), b)
//removeNode(b)
//console.log(a)
//console.log(a)
console.log(list.head)