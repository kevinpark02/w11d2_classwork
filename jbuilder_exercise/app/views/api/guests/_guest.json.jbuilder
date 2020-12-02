json.guest do
    json.gifts do |gift|
        json.title gift.title
        json.description gift.description
    end
end