import 'package:asigar_lp/screens/home.dart';
import 'package:flutter/material.dart';
import 'package:asigar_lp/widgets/theme.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      // supportedLocales: [
      //   Locale('en'),
      //   Locale('it'),
      //   Locale('en'),
      // ],
      // localizationsDelegates: [
      //   CountryLocalizations.delegate,
      //   GlobalMaterialLocalizations.delegate,
      //   GlobalWidgetsLocalizations.delegate,
      // ],
      title: 'asigar',
      theme: appTheme,
      home: HomePage(),
      // initialRoute: '/',
    );
  }
}
