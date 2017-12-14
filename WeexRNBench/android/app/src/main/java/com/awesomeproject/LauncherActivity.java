package com.awesomeproject;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.View;

import com.facebook.react.RNBenchActivity;


public class LauncherActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_launcher);
        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);


        findViewById(R.id.rn_mall_scroller).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(getBaseContext(), RNBenchActivity.class);
                intent.putExtra("componentName", "MallBenchmarkScroller");
                startActivity(intent);
            }
        });

        findViewById(R.id.rn_mall_flatlist).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(getBaseContext(), RNBenchActivity.class);
                intent.putExtra("componentName", "MallBenchmark");
                startActivity(intent);
            }
        });


        findViewById(R.id.weex_scroller_mall).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(getBaseContext(), WeexBenchActivity.class);
                intent.putExtra("bundleUrl", "file://assets/weex_mall_scroller.js");
                startActivity(intent);
            }
        });


        findViewById(R.id.weex_list_mall).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(getBaseContext(), WeexBenchActivity.class);
                intent.putExtra("bundleUrl", "file://assets/weex_mall_list.js");
                startActivity(intent);
            }
        });

        findViewById(R.id.weex_recycler_list_mall).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(getBaseContext(), WeexBenchActivity.class);
                intent.putExtra("bundleUrl", "file://assets/weex_mall_recycler_list.js");
                startActivity(intent);
            }
        });





        /**
         * load benck mark
         * */
        findViewById(R.id.weex_list).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(getBaseContext(), WeexBenchActivity.class);
                intent.putExtra("bundleUrl", "http://dotwe.org/raw/dist/3f4f74e87d3bd6056b9925de6bcb8fb2.bundle.wx");
                startActivity(intent);
            }
        });

        findViewById(R.id.weex_scroller).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(getBaseContext(), WeexBenchActivity.class);
                intent.putExtra("bundleUrl", "http://dotwe.org/raw/dist/2cde8e82f5f273bde683c487c7eb67db.bundle.wx");
                startActivity(intent);
            }
        });

        findViewById(R.id.rn_flatlist).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(getBaseContext(), RNBenchActivity.class);
                intent.putExtra("componentName", "LoadBenchmark");
                startActivity(intent);
            }
        });
    }

}
