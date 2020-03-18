//
function isFind(root){
	let result = false;
	let sum = 0
	if(root){
		sum += root.val;
		if(sum === 22){
		return true;
		}
		root.left && isFind(root.left);
		root.right && isFind(root.right);
	}
	return result;
}


