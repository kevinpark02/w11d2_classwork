json.tea do 
    json.extract! @tea, :id, :amount, :flavor, :description, :transaction_ids
end

json.transactions do 
    @tea.transactions.each do |transaction|
        json.extract! transaction, :id, :quantity, :created_at, :tea_id
        json.customer transaction.user.username
    end
end