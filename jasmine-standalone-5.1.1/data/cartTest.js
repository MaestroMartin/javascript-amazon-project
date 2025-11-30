import { addtoCart, cart, loadFromLocalStorage } from "../../data/cart";

describre("test suite: addtoCart",() => {

    It("adds an existting product to the cart", () => {
        spyOn(localStorage, 'setItem');
        spyOn(localStorage, 'getItem').and.callfake(()=>{
            return JSON.stringify([{
                productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
                quantity: 1,
                deliveryOptionId: "1"
            }]);
       });
        loadFromLocalStorage();

        addtoCart("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
        expect(cart.length).toEqual(1);
        expect(localStorage.setItem).tohaveBeenCalled(1);
        expect(cart[0].productId).toEqual("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
        expect(cart[0].quantity).toEqual(2);
    });

    it("adds a new product to the cart", () => {

        spyOn(localStorage, 'setItem');


       spyOn(localStorage, 'getItem').and.callfake(()=>{
            return JSON.stringify([]);
       });
        loadFromLocalStorage();

        addtoCart("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
        expect(cart.length).toEqual(1);
        expect(localStorage.setItem).tohaveBeenCalled(1);
        expect(cart[0].productId).toEqual("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
        expect(cart[0].quantity).toEqual(1);
    });

});