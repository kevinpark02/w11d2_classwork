json.pokemon do 
  json.set! @pokemon.id do
    json.extract! @pokemon, :id, :name, :attack, :defense, :poke_type, :image_url
  end
end

  
json.poke_moves do 
    @pokemon.poke_moves.each do |poke_move|
        json.set! poke_move.id do
            json.extract! poke_move, :id, :pokemon_id, :move_id
        end
    end
end

json.moves do 
    @pokemon.moves.each do |move|
        json.set! move.id do
            json.extract! move, :id, :name
        end
    end
end

json.items do 
    @pokemon.items.each do |item|
        json.set! item.id do
            json.extract! item, :id, :pokemon_id, :name, :price, :happiness, :image_url
        end
    end
end