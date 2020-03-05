


//
var maxDepth = function(root) {
    if (!root) {
      return 0;
    }
    let longest = 1;
    let ergodic = function(root, depth) {
        //注意判断是否为空
      if (!root) {
        return;
      }
      if (root.left || root.right) {
        depth += 1;
        if (depth > longest) {
          longest = depth;
        }
        ergodic(root.left, depth);
        ergodic(root.right, depth);
      }
    }
    ergodic(root, 1);
    return longest;
  };
  

  //

  var maxDepth = function(root) {
    return !root?0:Math.max(maxDepth(root.left),maxDepth(root.right))+1;
};
