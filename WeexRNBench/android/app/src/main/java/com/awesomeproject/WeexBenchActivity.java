package com.awesomeproject;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.View;
import android.widget.Toast;

import com.taobao.weex.IWXRenderListener;
import com.taobao.weex.WXSDKInstance;
import com.taobao.weex.common.WXRenderStrategy;

/**
 * Created by furture on 2017/12/12.
 */

public class WeexBenchActivity extends AppCompatActivity implements IWXRenderListener {

    private  WXSDKInstance mWXSDKInstance;


    private long start;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        start = System.currentTimeMillis();
        mWXSDKInstance = new WXSDKInstance(this);
        mWXSDKInstance.registerRenderListener(this);
        /**
         * bundleUrl source http://dotwe.org/vue/38e202c16bdfefbdb88a8754f975454c
         */
        String pageName = "WXSample";
        String bundleUrl = "http://dotwe.org/raw/dist/df08a95c33e859205ee37c3c8d278534.bundle.wx";
        if(getIntent() != null && getIntent().getExtras() != null
                && getIntent().getExtras().getString("bundleUrl") != null){
            bundleUrl = getIntent().getExtras().getString("bundleUrl");
        }
        mWXSDKInstance.renderByUrl(pageName, bundleUrl, null, null, WXRenderStrategy.APPEND_ASYNC);
    }
    @Override
    public void onViewCreated(WXSDKInstance instance, View view) {
        setContentView(view);
        //Log.e("weexrnbench", "weexrnbench  weex bundle  " + instance.getBundleUrl()
         //       + " used " + (System.currentTimeMillis() - start));
    }
    @Override
    public void onRenderSuccess(WXSDKInstance instance, int width, int height) {
        //Log.e("weexrnbench", "weexrnbench  weex bundle 3 " + instance.getBundleUrl()
        //        + " used " + (System.currentTimeMillis() - start));
    }
    @Override
    public void onRefreshSuccess(WXSDKInstance instance, int width, int height) {
    }
    @Override
    public void onException(WXSDKInstance instance, String errCode, String msg) {
        Toast.makeText(getBaseContext(), errCode + msg, Toast.LENGTH_SHORT).show();
    }
    @Override
    protected void onResume() {
        super.onResume();
        if(mWXSDKInstance!=null){
            mWXSDKInstance.onActivityResume();
        }
    }
    @Override
    protected void onPause() {
        super.onPause();
        if(mWXSDKInstance!=null){
            mWXSDKInstance.onActivityPause();
        }
    }
    @Override
    protected void onStop() {
        super.onStop();
        if(mWXSDKInstance!=null){
            mWXSDKInstance.onActivityStop();
        }
    }
    @Override
    protected void onDestroy() {
        super.onDestroy();
        if(mWXSDKInstance!=null){
            mWXSDKInstance.onActivityDestroy();
        }
    }
}
