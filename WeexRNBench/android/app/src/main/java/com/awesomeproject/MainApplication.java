package com.awesomeproject;

import android.app.Application;

import com.alibaba.weex.commons.adapter.FrescoImageAdapter;
import com.codemonkeylabs.fpslibrary.TinyDancer;
import com.facebook.drawee.backends.pipeline.Fresco;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.taobao.weex.InitConfig;
import com.taobao.weex.WXEnvironment;
import com.taobao.weex.WXSDKEngine;

import java.util.Arrays;
import java.util.List;



public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return  false;
      //return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
    Fresco.initialize(this);
    //init weex
    InitConfig config = new InitConfig.Builder().setImgAdapter(new FrescoImageAdapter()).build();
    WXSDKEngine.initialize(this,config);

    WXEnvironment.isPerf = true;

    TinyDancer.create().show(this);

  }

  @Override
  public void onTerminate() {
    super.onTerminate();
  }


}
