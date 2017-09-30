function LinkedList(){
this.head = null;
this.tail = null;
}

function Node(value, next, prev){
  this.value = value;
  this.next = next;
  this.prev = prev;
}

LinkedList.prototype.addToHead = function(value) {
  var newNode = new Node(value, this.head, null);
  if(this.head) this.head.prev = newNode;
  else this.tail = newNode;
  this.head = newNode;
};

LinkedList.prototype.removeHead = function(){
  if(!this.head) return null;
  var val = this.head.value;
  this.head = this.head.next;
  if(this.head) this.head.prev = null;
  else this.tail = null;
  return val;
};

LinkedList.prototype.addToTail = function(value) {
  var newNode = new Node(value, null, this.tail);
  if(this.tail) this.tail.next = newNode;
  else this.head = newNode;
  this.tail = newNode;
};

LinkedList.prototype.removeTail = function(value){
  if(!this.tail) return null;
  var val = this.tail.value;
  this.tail = this.tail.prev;
  if(this.tail) this.tail.next = null;
  else this.head = null;
  return val;
};


LinkedList.prototype.search = function(searchValue){
  var currentNode = this.head;
  while(currentNode){

    if(currentNode.value == searchValue) return currentNode.value;

    currentNode = currentNode.next;
  }
  return null;
};

LinkedList.prototype.indexOf = function(searchValue){

var currentNode = this.head;
var counter = 0;
var indexs = [];
  while(currentNode){
    if(currentNode.value == searchValue) {
      indexs.push(counter);
    }
    currentNode = currentNode.next;
    counter++;
  }

  return indexs;

};

var ll = new LinkedList();

ll.addToTail(10);
ll.addToHead(2000);
ll.addToTail(20);
ll.addToTail(30);
ll.addToHead(1000);
ll.addToHead(2000);
ll.addToHead(2000);

console.log(ll.indexOf(2000));
console.log(ll);



