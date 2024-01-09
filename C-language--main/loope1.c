#include <stdio.h>

int main(){

    // init
    int x = 3;
    //first loop
    for(int i = 5; i>=1; i--){  // This loop for first row and outer row how much time we should repeate 
        // Second loop
        for(int j = 1; j<=i; j++){ // This loop for inner row where to print value
            printf("%d",x);
        }
        printf(" ");
    }
    return 0;
}