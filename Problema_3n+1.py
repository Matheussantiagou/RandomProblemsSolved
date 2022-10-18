## QUESTÃO
## Escreva um programa em Python que recebe como entrada um numero inteiro maior que 1 e imprime
## o numero de passos que ele precisa para obter o numero 1 de acordo com as regras do problema 3n+1.


def calculo(n):
    passos = 0

    while n != 1:
        print('Valor Atual de N: ', n)
        if n % 2 == 0:
            n = n /2
            passos += 1
        else: 
            n = 3 * n + 1
            passos += 1
        
    print("N chegou em ", n)
    return "Numero de passos: " + str(passos)


print(calculo(23))


