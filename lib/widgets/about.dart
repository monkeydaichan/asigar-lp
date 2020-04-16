import 'package:flutter/material.dart';
import 'package:asigar_lp/layout/adaptive.dart';
import 'package:asigar_lp/constants.dart';

class About extends StatelessWidget {
  About({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final isDesktop = isDisplayDesktop(context);

    return Container(
      height: (isDesktop
          ? desktopHeight(context) * 0.5
          : mobileHeight(context) * 0.6),
      color: bgColor1,
      child: Align(
        alignment: Alignment.center,
        child: Text('asigarは荷物を時間通りに集荷・配送します',
            textAlign: TextAlign.center,
            style: Theme.of(context).textTheme.headline1.apply(
                color: Colors.white, fontSizeDelta: (isDesktop ? 10 : 0))),
      ),
    );
  }
}
