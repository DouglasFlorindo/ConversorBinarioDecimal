binario = input('Insira a sequência binária: ')
binarioList = [*binario[::-1]] #inverte a string e então distribui cada caractér dentro da lista
expoente = 0
total = 0

if binarioList:
    for algarismo in binarioList: #para cada item da lista (algarismo), transforma em inteiro e multiplica por 2^expoente
        if algarismo != '1' and algarismo != '0':
            print('Caractere inválido! Insira somente uma sequência binária.')
            break
        resultado = int(algarismo) * 2 ** expoente
        total = total + resultado #então adiciona o resultado ao total e aumenta o expoente em '1'
        expoente += 1

    print('\n', binario, '>>>', total)