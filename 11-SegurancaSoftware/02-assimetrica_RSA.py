from Crypto.PublicKey import RSA
from Crypto.Cipher import PKCS1_OAEP

# Gerar chaves
key = RSA.generate(2048)
public_key = key.publickey()
private_key = key

# Criptografar com a chave pública
cipher = PKCS1_OAEP.new(public_key)
mensagem = b"Mensagem Secreta"
mensagem_encriptada = cipher.encrypt(mensagem)

# Descriptografar com a chave privada
decipher = PKCS1_OAEP.new(private_key)
mensagem_decriptada = decipher.decrypt(mensagem_encriptada)

print("Criptografado:", mensagem_encriptada)
print("Descriptografado:", mensagem_decriptada.decode())
