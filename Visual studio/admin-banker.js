document.addEventListener('DOMContentLoaded', function() {
    const editButtons = document.querySelectorAll('.btn-edit');
    const resolveButtons = document.querySelectorAll('.btn-resolve');
  
    editButtons.forEach(button => {
      button.addEventListener('click', function() {
        const row = this.parentNode.parentNode;
        const accountNumber = row.cells[0].textContent;
        const customerName = row.cells[1].textContent;
        const balance = row.cells[2].textContent;
  
        // Dummy logic to edit customer account
        console.log(`Edit account: ${accountNumber}, Customer: ${customerName}, Balance: ${balance}`);
      });
    });
  
    resolveButtons.forEach(button => {
      button.addEventListener('click', function() {
        const issue = this.parentNode;
        issue.parentNode.removeChild(issue);
  
        // Dummy logic to resolve specific technical issue on Banker Page
        const issueText = issue.textContent.trim().split(':')[1].trim();
        console.log(`Resolved issue: ${issueText}`);
      });
    });
  });