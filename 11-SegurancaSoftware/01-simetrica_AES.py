from cryptography.fernet import Fernet

# Gerar chave
key = Fernet.generate_key()
cipher = Fernet(key)

# Mensagem original
mensagem = b"Texto secreto"

# Criptografar
mensagem_encriptada = cipher.encrypt(mensagem)
print("Criptografado:", mensagem_encriptada)

# Descriptografar
mensagem_decriptada = cipher.decrypt(mensagem_encriptada)
print("Descriptografado:", mensagem_decriptada.decode())
