var Link = (function () {
    function Link(nodeValue, nodeReference) {
        this.value = nodeValue;
        this.nextNode = nodeReference;
    }
    return Link;
}());

var LinkedList = (function () {
    function LinkedList() {
        this._length = 0;
    }
    LinkedList.prototype.insertLink = function (i) {
        if (this.list == null) {
            this.list = new Link(i, null);
            this._length++;
            return true;
        }
        else {
            var temp = this.list;
            while (temp.nextNode != null) {
                temp = temp.nextNode;
            }
            temp.nextNode = new Link(i, null);
            this._length++;
            return false;
        }
    };
    LinkedList.prototype.printLinkList = function () {
        var temp = this.list;
        if (this.list == null) {
            console.log('empty linked list');
        }
        else {
            while (temp.nextNode != null) {
                console.log(temp.value);
                temp = temp.nextNode;
            }
        }
    };
    //last occurrence of a given number
    LinkedList.prototype.searchNodeByValue = function (i) {
        var temp = this.list;
        var counter = 1;
        var position = null;
        if (temp == null) {
            console.log('empty list');
        }
        else {
            while (temp.nextNode != null) {
                if (temp.value === i) {
                    position = counter;
                }
                counter++;
                temp = temp.nextNode;
            }
            //check if the  last element of the node
            if (temp.value === i) {
                position = counter;
            }
        }
        if (position == null) {
            return 0;
        }
        else {
            return position;
        }
    };
    LinkedList.prototype.removeListItemByValue = function (i) {
        if (this.list == null) {
            return true;
        }
        else {
            var itemPosition = this.searchNodeByValue(i);
            if (itemPosition == 0) {
                return true;
            }
            else {
                var temp = this.list;
                //if its the first element in the stack
                if (itemPosition == 1) {
                    this.list = this.list.nextNode;
                    return true;
                }
                //if the element is not first or last
                while (temp.nextNode.value != i) {
                    temp = temp.nextNode;
                }
                temp.nextNode = temp.nextNode.nextNode;
            }
            return true;
        }
    };
    LinkedList.prototype.removeListItemByPos = function (i) {
        var temp = this.list;
        var counter = 1;
        if (i > this._length)
            return false;
        if (i == 1) {
            this.list = this.list.nextNode;
            return true;
        }
        while (counter != (i - 1)) {
            temp = temp.nextNode;
            counter++;
        }
        temp.nextNode = temp.nextNode.nextNode;
    };
    LinkedList.prototype.deDupeList = function () {
        var temp = this.list;
        var valueMap = {};
        var counter = 0;
        //let valueMap = new Set([]);
        if (temp == null)
            return true;
        while (this._length > counter) {
            if (valueMap[temp.value] == undefined) {
                valueMap[temp.value] = 1;
            }
            else {
                this.removeListItemByValue(temp.value);
            }
            temp = temp.nextNode;
            counter++;
        }
        return true;
    };
    return LinkedList;
}());
var obj = new LinkedList();
obj.insertLink(1);
obj.insertLink(2);
obj.insertLink(2);
obj.insertLink(7);
obj.insertLink(7);
//obj.removeListItemByValue(7)
obj.deDupeList();
obj.printLinkList();
