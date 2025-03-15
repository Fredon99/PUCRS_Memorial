import hashlib
import os

# Mensagem de entrada
mensagem = "Texto de exemplo".encode()

# Opcional: Adicionar um "sal" aleatório para aumentar a segurança
sal = os.urandom(16)  # 16 bytes de sal aleatório

# Criar o hash SHA-256 (com ou sem sal)
hash_sha256 = hashlib.sha256(sal + mensagem).hexdigest()

# Exibir o hash e o sal (em hexadecimal)
print("SHA-256:", hash_sha256)
print("Sal (hex):", sal.hex())  # Apenas se o sal for usado
