import React from 'react';

class Order implements Serializable {
  private String orderID;
  private String truckType;

  public Order(String orderID, String truckType) {
      this.orderID = orderID;
      this.truckType = truckType;
  }

  public String getOrderID() {
      return orderID;
  }

  public void setOrderID(String orderID) {
      this.orderID = orderID;
  }

  public String getTruckType() {
      return truckType;
  }

  public void setTruckType(String truckType) {
      this.truckType = truckType;
  }
}
