class Solution {
    public int maximumWealth(int[][] accounts)
    {
        int m = 0;
        for(int[] linhas : accounts)
        {
            int sum = 0;
            for(int coluna : linhas)
            {
                sum+=coluna;
            }
            m = Math.max(sum, m);
        }
        return m;
    }
}