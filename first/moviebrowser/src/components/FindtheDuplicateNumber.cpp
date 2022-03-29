class Solution {
public:
    int findDuplicate(vector<int>& nums) {
        int result=0;
        for(auto a:nums){
            for(auto x:nums){
                if(a==x){
                    result=a;
                    break;
                }
            }
        }
        return result;
    }
};