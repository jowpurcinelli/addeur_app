package com.trichain.addeur.adapter;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.trichain.addeur.R;
import com.trichain.addeur.model.Order;

import java.util.ArrayList;

public class OrdersAdapter extends RecyclerView.Adapter<OrdersAdapter.ViewHolder> {

    private Context context;
    private ArrayList<Order> orders;
    private OrderClickListener orderClickListener;


    public OrdersAdapter(Context context, ArrayList<Order> orders) {
        this.context = context;
        this.orders = orders;
    }

    public interface OrderClickListener {
        void onOrderClicked(Order order, int pos);

        void onOrderModifyClick(Order order, int pos);

        void onOrderInvoiceClick(Order order, int pos);
    }

    public void setOrderClickListener(OrderClickListener orderClickListener) {
        this.orderClickListener = orderClickListener;
    }

    @NonNull
    @Override
    public ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        return new ViewHolder(LayoutInflater.from(context).inflate(R.layout.item_order, parent, false));
    }

    @Override
    public void onBindViewHolder(@NonNull ViewHolder holder, int position) {
        Order d = orders.get(position);
        holder.tvBookingID.setText(d.getOrderID());
        holder.tvTruckDesc.setText(d.getTruckType());

        holder.btnOrderDetails.setOnClickListener(v -> orderClickListener.onOrderClicked(d, position));
        holder.btnModifyOrder.setOnClickListener(v -> orderClickListener.onOrderModifyClick(d, position));
        holder.btnOrderInvoice.setOnClickListener(v -> orderClickListener.onOrderInvoiceClick(d, position));
    }

    @Override
    public int getItemCount() {
        return orders.size();
    }

    public class ViewHolder extends RecyclerView.ViewHolder {

        TextView tvBookingID, tvTruckDesc;
        Button btnOrderDetails, btnModifyOrder, btnOrderInvoice;

        public ViewHolder(@NonNull View itemView) {
            super(itemView);

            tvBookingID = itemView.findViewById(R.id.tvBookingID);
            tvTruckDesc = itemView.findViewById(R.id.tvTruckDesc);
            btnOrderDetails = itemView.findViewById(R.id.btnOrderDetails);
            btnModifyOrder = itemView.findViewById(R.id.btnModifyOrder);
            btnOrderInvoice = itemView.findViewById(R.id.btnOrderInvoice);

        }
    }
}