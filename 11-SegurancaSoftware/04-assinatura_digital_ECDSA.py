from ecdsa import SigningKey, NIST384p

# Gerar chave privada
sk = SigningKey.generate(curve=NIST384p)
mensagem = b"Mensagem importante"

# Criar assinatura
assinatura = sk.sign(mensagem)

# Verificar assinatura
vk = sk.verifying_key
print("Assinatura válida?", vk.verify(assinatura, mensagem))
