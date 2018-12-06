package com.royole.myrnapplication;

import android.content.Intent;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.provider.Settings;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.support.design.widget.BottomNavigationView;
import android.support.v4.app.Fragment;
import android.support.v7.app.AppCompatActivity;
import android.transition.TransitionInflater;
import android.view.MenuItem;
import android.widget.TextView;

import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactRootView;
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler;

public class MainActivity extends AppCompatActivity implements DefaultHardwareBackBtnHandler {
    private static final String KEY_FIRST_FRAGMENT = "KEY_FIRST_FRAGMENT";
    private static final String KEY_SECOND_FRAGMENT = "KEY_SECOND_FRAGMENT";
    private static final String KEY_THIRD_FRAGMENT = "KEY_THIRD_FRAGMENT";

    private static final String KEY_SELECT_TAB = "KEY_SELECT_TAB";

    private Fragment[] mFragments = new Fragment[3];
    private int mSelectTab;

    private BottomNavigationView.OnNavigationItemSelectedListener mOnNavigationItemSelectedListener
            = new BottomNavigationView.OnNavigationItemSelectedListener() {

        @Override
        public boolean onNavigationItemSelected(@NonNull MenuItem item) {
            switch (item.getItemId()) {
                case R.id.navigation_home:
                    onTabSelected(0);
                    return true;
                case R.id.navigation_dashboard:
                    onTabSelected(1);
                    return true;
                case R.id.navigation_notifications:
                    onTabSelected(2);
                    return true;
            }
            return false;
        }
    };

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        BottomNavigationView navigation = findViewById(R.id.navigation);
        navigation.setOnNavigationItemSelectedListener(mOnNavigationItemSelectedListener);

        initFragments(savedInstanceState);
        onTabSelected(0);
    }

    private void initFragments(Bundle savedInstanceState) {
        if (savedInstanceState != null) {
            mFragments[0] = getSupportFragmentManager()
                    .getFragment(savedInstanceState, KEY_FIRST_FRAGMENT);
            mFragments[1] = getSupportFragmentManager()
                    .getFragment(savedInstanceState, KEY_SECOND_FRAGMENT);
            mFragments[2] = getSupportFragmentManager()
                    .getFragment(savedInstanceState, KEY_THIRD_FRAGMENT);
        } else {
            mFragments[0] = TextFragment.newInstance("Home");
            mFragments[1] = RNFragment.newInstance();
            mFragments[2] = TextFragment.newInstance("Notifications");
        }
    }

    @Override
    protected void onRestoreInstanceState(Bundle savedInstanceState) {
        super.onRestoreInstanceState(savedInstanceState);
        mSelectTab = savedInstanceState.getInt(KEY_SELECT_TAB);
    }


    @Override
    protected void onSaveInstanceState(Bundle outState) {
        if (mFragments[0] != null) {
            getSupportFragmentManager().putFragment(outState,KEY_FIRST_FRAGMENT, mFragments[0]);
        }

        if (mFragments[1] != null) {
            getSupportFragmentManager().putFragment(outState, KEY_SECOND_FRAGMENT, mFragments[1]);
        }

        if (mFragments[2] != null) {
            getSupportFragmentManager().putFragment(outState, KEY_THIRD_FRAGMENT, mFragments[2]);
        }

        outState.putInt(KEY_SELECT_TAB, mSelectTab);
        super.onSaveInstanceState(outState);
    }


    /**
     * 当搜索结果的tab被选择时
     * @param position tab的位置
     */
    private void onTabSelected(int position) {
        //tab切换
        int curSelectTab = mSelectTab;
        Fragment fragment = mFragments[position];

        //add Fragment
//        if (!fragment.isAdded()) {
            getSupportFragmentManager().beginTransaction().replace(R.id.fl_container, fragment).commit();
//        }
//        }
//
//        //showFragment
//        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
//            if (position > curSelectTab) {
//                if (mFragments[curSelectTab] != null) {
//                    mFragments[curSelectTab].setExitTransition(inflater.inflateTransition(R.transition.slide_out_to_left));
//                }
//                if (mFragments[position] != null) {
//                    mFragments[position].setEnterTransition(inflater.inflateTransition(R.transition.slide_in_from_right));
//                }
//            } else if (position < curSelectTab){
//
//                if (mFragments[curSelectTab] != null) {
//                    mFragments[curSelectTab].setExitTransition(inflater.inflateTransition(R.transition.slide_out_to_right));
//                }
//
//                if (mFragments[position] != null) {
//                    mFragments[position].setEnterTransition(inflater.inflateTransition(R.transition.slide_in_from_left));
//                }
//            }
////        }
//        getSupportFragmentManager().beginTransaction().hide(mFragments[curSelectTab]).commit();
//        getSupportFragmentManager().beginTransaction().show(mFragments[position]).commit();
        mSelectTab = position;
    }

    @Override
    public void onBackPressed() {
        if (mFragments[1] != null && mSelectTab == 1) {
            if (((RNFragment) mFragments[1]).onBackPressed()) {
                return;
            }
        }
        super.onBackPressed();
    }

    @Override
    public void invokeDefaultOnBackPressed() {
        super.onBackPressed();
    }
}
