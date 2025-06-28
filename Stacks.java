import java.util.*;
// import java.util.ArrayList;
public class Stacks{
    //using linkedlist for stack
    // static class Node{
    //     int data;
    //     Node next;
    //     Node(int data){
    //         this.data = data;
    //         this.next = null;
    //     }
    // }
    // static class Stackc{
    //     static Node head = null;
    //     public static boolean isEmpty(){
    //         return head == null;
    //     }
    //     public static void push(int data){
    //         Node newnode = new Node(data);
    //         if(isEmpty()){
    //             head = newnode;
    //             return;
    //         }
    //         newnode.next = head;
    //         head  = newnode;
    //     }
    //     public static int pop(){
    //         if(isEmpty()){
    //             return -1;
    //         }
    //         int top = head.data;
    //         head = head.next;
    //         return top;
    //     }
    //     public static int peek(){
    //         if(isEmpty()){
    //             return -1;
    //         }
    //         return head.data;
    //     }
    // }
    //using arraylist for stack
    // static class Stackb {
        // static ArrayList<Integer> list = new ArrayList<>();
        // public static boolean isEmpty(){
        //     return list.size() == 0;
        // }
        // public static void push(int data){
        //     list.add(data);
        // }
        // public static int pop(){
        //     if(isEmpty()){
        //         return -1;
        //     }
        //     int top = list.get(list.size() - 1);
        //     list.remove(list.size()-1);
        //     return top;
        // }
        // public static int peek(){
        //     if(isEmpty()){
        //         return -1;
        //     }
        //     return list.get(list.size()-1);
        // }
        
    // }
    // push a given data at bottom of stack 
    public static void pushatbottom(Stack<Integer> s,int data){
        if(s.isEmpty()){
            s.push(data);
            return;
        }                                                                           //T.C O(n)
        int top = s.pop();
        pushatbottom(s, data);
        s.push(top);
    }
    public static void revstr(Stack<String> a){
        while(!a.isEmpty()){
            String top = a.pop();
            System.out.print(top);
        }
    }
    public static String revst(String str){
        Stack<Character> s = new Stack<>();
        int idx = 0;
        while (idx<str.length()) {
            s.push(str.charAt(idx));
            idx++;
        }
        StringBuilder res = new StringBuilder("");
        while(!s.isEmpty()){
            char curr = s.pop();
            res.append(curr);
        }
        return res.toString();
    }
    public static void revstack(Stack<Integer> s){
        if(s.empty()){
            return;
        }
        int top = s.pop();
        revstack(s);
        s.push(top);
        
    }

    public static void main(String[] args) {
        // Stackb s = new Stackb();
        // Stackc s = new Stackc();
        // String str = "sanjeev";
        // String result = revst(str);
        // System.out.println(result);
        // Stack<String> a = new Stack<>();
        // a.push("s");
        // a.push("a");
        // a.push("n");
        // revstr(a);
        Stack<Integer> s = new Stack<>();
        s.push(1);
        s.push(2);
        s.push(3);
       // pushatbottom(s,4);
        while (!s.isEmpty()) {
            System.out.println(s.peek());
            s.pop();
        }
        revstack(s);
    }
}