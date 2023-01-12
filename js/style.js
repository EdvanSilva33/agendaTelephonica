const evento = document.getElementById("form");
        // Adicionar evento de clique ao botão "Cadastrar"
        evento.addEventListener("submit", function(e){
            e.preventDefault();
            addContact();
        }
        );

// Função callback para adicionar contato
function addContact() {
  // Pega os valores dos campos de entrada
  const name = document.getElementById("name").value;
  const telephone = document.getElementById("telephone").value;

  // Verifica se o nome ou telefone já existem na tabela
  const existingContacts = document.querySelectorAll("table  tbody tr");
  for (let i = 0; i < existingContacts.length; i++) {
    const contactName = existingContacts[i].children[0].textContent;
    const contactTelephone = existingContacts[i].children[1].textContent;
    if (name === contactName || telephone === contactTelephone) {
      alert("Este contato já existe na tabela!");
      return;
    }
  }

  // Adiciona uma nova linha na tabela
  const table = document.getElementById("contacts-table").getElementsByTagName('tbody')[0];
  const newRow = table.insertRow();
  const nameCell = newRow.insertCell(0);
  const telephoneCell = newRow.insertCell(1);
  nameCell.innerHTML = name;
  telephoneCell.innerHTML = telephone;
  // Limpa os campos de entrada
  document.getElementById("name").value = "";
  document.getElementById("telephone").value = "";

  // Atualiza a contagem de contatos
  updateContactsCount();
}

// Função para atualizar a contagem de contatos
function updateContactsCount() {
  const contactsCount = document.querySelectorAll("#contacts-table tbody tr").length;
  document.getElementById("contacts-count").innerHTML = ` ${contactsCount}`;
}
