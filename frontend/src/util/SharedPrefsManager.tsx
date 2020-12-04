class SharedPrefsManager {
  private static final String KEY_USER_TYPE = "user_type";
  private static SharedPreferences sharedPreferences;
  private static SharedPrefsManager mInstance;
  private static final String TAG = "SharedPrefsManager";

  private SharedPrefsManager(Context context) {
      String SHARED_PREFS_NAME = "addeur";
      sharedPreferences = context.getSharedPreferences(SHARED_PREFS_NAME, Context.MODE_PRIVATE);
  }

  public static synchronized SharedPrefsManager getInstance(Context context) {
      if (mInstance == null) {
          mInstance = new SharedPrefsManager(context);
      }
      return mInstance;
  }

  public void setUserType(String userType) {
      sharedPreferences.edit().putString(KEY_USER_TYPE, userType).apply();
  }

  public String getKeyUserType() {
      return sharedPreferences.getString(KEY_USER_TYPE, TYPE_CUSTOMER); //Default to customer
  }
}