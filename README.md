🧩 Diretrizes de Desenvolvimento – Projeto Ubiqua

Para manter o código organizado, padronizado e fácil de manter, siga as orientações abaixo durante o desenvolvimento.

🌿 Criação de Branches

Cada nova funcionalidade, correção ou melhoria deve ser desenvolvida em uma branch separada, criada a partir da branch principal (main ou master).

🔧 Passos:

Atualize a branch principal antes de iniciar o trabalho:

- git checkout main
- git pull origin main


Crie uma nova branch com um nome descritivo:

- git checkout -b nome-da-sua-branch


💡 Dica: use nomes padronizados e claros.
Exemplos:

- feature/login-page → nova funcionalidade

- fix/ajuste-api → correção de bug

- chore/update-docs → atualização de documentação

Implemente e teste a funcionalidade.

Faça commits pequenos e significativos, seguindo boas práticas:

- git commit -m "feat: adiciona autenticação com JWT"


Use o padrão Conventional Commits
 para manter o histórico limpo e fácil de entender.

Envie sua branch para o repositório remoto:

- git push origin nome-da-sua-branch


Crie um Pull Request (PR) para a branch principal contendo:

🧱 Descrição clara do que foi implementado ou corrigido

🎯 Motivo da mudança

🧪 Passos para testar

🗒️ Outras observações relevantes
