var preorderTraversal = function(root) {
    const res = []
    function traversal (root) {
      if (root !== null) {
        res.push(root.val) // 访问根节点的值
        traversal(root.left) // 递归遍历左子树
        traversal(root.right) // 递归遍历右子树
      }
    }
    traversal(root)
    return res
  }



  var isSameTree = function(p, q) {
    function traversal (root1, root2) {
      if (root1 === null && root2 !== null) {
        return false
      } else if (root1 !== null && root2 === null) {
        return false
      } else if (root1 === null && root2 === null) {
        return true
      } else {
        return  root1.val === root2.val && traversal(root1.left, root2.left) && traversal(root1.right, root2.right)
      }
    }
    return traversal(p, q)
  }
  
  
  var invertTree = function(root) {
    function traversal (root) {
      if (root === null) {
        return null
      } else {
        [root.left, root.right] = [traversal(root.right), traversal(root.left)]
        return root
      }
    }
    return  traversal(root)
  }
  
  var postorder = function(root) {
    const res = []
    function traversal (root) {
      if (root !== null) {
        root.children.forEach(child => {
          traversal(child)
        })
        res.push(root.val)
      }
    }
    traversal(root)
    return res
  }
  

  var zigzagLevelOrder = function(root) {
    if (root === null) {
      return []
    } else {
      let res = []
      function traversal (root, depth) {
        if (root !== null) {
          if (res[depth] === undefined) {
            res[depth] = []
          }
          if (depth & 1) {
            res[depth].unshift(root.val)
          } else {
            res[depth].push(root.val)
          }
          traversal(root.left, depth + 1)
          traversal(root.right, depth + 1)
        }
      }
      traversal(root, 0)
      return res
    }
  }



  var kthSmallest = function (root, k) {
    let res
    let count = 0
    function traversal(node) {
      if (node !== null) {
        if (count < k) {
          traversal(node.left)
        }
        if (++count === k) {
          res = node.val
        }
        if (count < k) {
          traversal(node.right)
        }
      }
    }
    traversal(root)
    return res
  }

  var levelOrder = function(root) {
    const res = []
    function traversal (root, depth) {
      if (root !== null) {
        if (!res[depth]) {
          res[depth] = []
        }
        traversal(root.left, depth + 1)
        res[depth].push(root.val)
        traversal(root.right, depth + 1)
      }
    }
    traversal(root, 0)
    return res
  }
  
  var rightSideView = function(root) {
    const arr = []
    function traversal (root, depth) {
      if (root) {
        if (arr[depth] === undefined) {
          arr[depth] = []
        }
        arr[depth].push(root.val)
        traversal(root.left, depth + 1)
        traversal(root.right, depth + 1)
      }
    }
    traversal(root, 0)
    const res = []
    for (let i = 0; i < arr.length; ++i) {
      res.push(arr[i][arr[i].length - 1])
    }
    return res
  };
  
  function TreeDepth(pRoot) {
    return !pRoot ? 0 : Math.max(TreeDepth(pRoot.left), TreeDepth(pRoot.right)) + 1
  }



  var levelOrder = function(root) {
    if (!root) return [];
    const items = []; // 存放所有节点
    const queue = [root, null]; // null 简化操作
    let levelNodes = []; // 存放每一层的节点
  
    while (queue.length > 0) {
      const t = queue.shift();
  
      if (t) {
        levelNodes.push(t.val)
        if (t.left) {
          queue.push(t.left);
        }
        if (t.right) {
          queue.push(t.right);
        }
      } else { // 一层已经遍历完了
        items.push(levelNodes);
        levelNodes = [];
        if (queue.length > 0) {
          queue.push(null)
        }
      }
    }
  
    return items;
  };



  const removeNthFromEnd = (head, n) => {
    let first = head;
    let second = head;
    while (n > 0) {
      first = first.next;
      n -= 1;
    }
    if (!first) return head.next; // 如果first为null，则要删除的节点是首节点，直接返回head的下一个节点
    while (first.next) {
      first = first.next;
      second = second.next;
    }
    second.next = second.next.next;
    return head;
  };



  for (var i = 1; i <= 5; i++) {
    ;(function(j) {
      setTimeout(function timer() {
        console.log(j)
      }, j * 1000)
    })(i)
  }



  let onWatch = (obj, setBind, getLogger) => {
    let handler = {
      get(target, property, receiver) {
        getLogger(target, property)
        return Reflect.get(target, property, receiver)
      },
      set(target, property, value, receiver) {
        setBind(value, property)
        return Reflect.set(target, property, value)
      }
    }
    return new Proxy(obj, handler)
  }