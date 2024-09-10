import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderDetails } from '../_model/order-details.model';
import { MyOrderDetails } from '../_model/order.model';
import { Product } from '../_model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  public createTransaction(amount) {
    return this.httpClient.get("http://localhost:9091/createTransaction/"+amount);
  }

  public markAsDelivered(orderId) {
      return this.httpClient.get("http://localhost:9091/markOrderAsDelivered/"+orderId)
  }

  public getAllOrderDetailsForAdmin(status: string): Observable<MyOrderDetails[]> {
    return this.httpClient.get<MyOrderDetails[]>("http://localhost:9091/getAllOrderDetails/"+status);
  }

  public getMyOrders(): Observable<MyOrderDetails[]> {
    return this.httpClient.get<MyOrderDetails[]>("http://localhost:9091/getOrderDetails");
  }

  public deleteCartItem(cartId) {
    return this.httpClient.delete("http://localhost:9091/deleteCartItem/"+cartId);
  }

  public addProduct(product: FormData) {
    return this.httpClient.post<Product>("http://localhost:9091/addNewProduct", product);
  }

  public getAllProducts(pageNumber, searchKeyword: string = "") {
    return this.httpClient.get<Product[]>("http://localhost:9091/getAllProducts?pageNumber="+pageNumber+"&searchKey="+searchKeyword);
  }

  public getProductDetailsById(productId) {
    return this.httpClient.get<Product>("http://localhost:9091/getProductDetailsById/"+productId);
  }

  public deleteProduct(productId: number) {
    return this.httpClient.delete("http://localhost:9091/deleteProductDetails/"+productId);
  }

  public getProductDetails(isSingleProductCheckout, productId) {
    return this.httpClient.get<Product[]>("http://localhost:9091/getProductDetails/"+isSingleProductCheckout+"/"+productId);
  }

  public placeOrder(orderDetails: OrderDetails, isCartCheckout) {
    return this.httpClient.post("http://localhost:9091/placeOrder/"+isCartCheckout, orderDetails);
  }

  public addToCart(productId) {
    return this.httpClient.get("http://localhost:9091/addToCart/"+productId);
  }

  public getCartDetails() {
    return this.httpClient.get("http://localhost:9091/getCartDetails");
  }
}
