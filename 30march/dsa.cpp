#include<bits/stdc++.h>
using namespace std;
struct Node{
    int key;
     Node *left,*right;
     Node (int key){
         this->key=key;
         this->left=this->right=nullptr;
     } 
};
bool printlevel(Node *root,int level){
    if(root==nullptr){
        return false;
    }
    else {
        if(level==1){
            cout<<root->key<<" ";
            return true;
            
        }
        bool left=printlevel(root->left,level-1);
        bool right=printlevel(root->right,level-1);
        
        
    
        return left||right;
    }
    
}
void Traverse(Node *root){
    int level=1;
    while(printlevel(root,level)){
        level++;
    }
    
}
int main(){
    Node* root = new Node(100);
    root->left = new Node(101);
    root->right = new Node(102);
    root->left->left = new Node(103);
    root->left->right = new Node(104);
    root->right->left = new Node(105);
    root->right->right = new Node(106);
    

    Traverse(root);
    return 0;
}