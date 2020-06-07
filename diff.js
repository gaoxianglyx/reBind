/*给你两个单词 word1 和 word2，请你计算出将 word1 转换成 word2 所使用的最少操作数
你只能对一个单词进行插入/删除/替换一个字符
*/
function minDistance(word1, word2) {
    var l1 = word1.length, l2 = word2.length;
    var dp = new Array(l1 + 1);
	for(var i = 0;i <=  l1; i++){
			dp[i] = new Array( l2 + 1);
	}
	/*使用 二维数组 DP[i][j]，表示 word1 的 i 个字母 与 word2 的 第 j 个字母 相同 需要的操作步骤数
        将最对 word1 处理 转化为 对 word1 和 word2 均处理*/
    for(var i = 0; i <= l1; i++) dp[i][0] = i;
    for(var j = 0; j <= l2; j++) dp[0][j] = j;
    for(var i = 1; i <= l1; i++){
        for(var j = 1; j <= l2; j++){
            //当前位置的两个字母相同，不需要进行插入、删除或替换操作
            if(word1[i-1] == word2[j-1]) dp[i][j] = dp[i-1][j-1];
            //当前位置的两个字母不同，即word1[i] != word2[j]
            //插入操作后应该比较:word1[i-1]与word2[j]
            //删除操作后应该比较:word1[i]与word2[j-1]
            //替换操作后应该比较:word1[i-1]与word2[j-1]
            //选取三种操作中最小的步数
            else dp[i][j] = Math.min(dp[i-1][j-1], Math.min(dp[i-1][j], dp[i][j-1])) + 1;
        }
    }
    return dp[l1][l2];
}