class Solution{
    public:
    ListNode * removeNthFromEnd(ListNode *head,int n){
        ListNode* p1=head, *p2=head;
        for(int i=0;i<n;i++)
            p1=p1->next;
        if(!p1)
            return head->next;
        while(p1->next){
            p1=p1->next;
            p2->next;
        }
        p2->next=p2->next->next;
        return head;
    }
};