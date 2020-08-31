(function(factory){if(typeof module==="object"&&typeof module.exports!=="undefined"){module.exports=factory}else{factory(FusionCharts)}})(function(FusionCharts){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{configurable:false,enumerable:true,get:getter})}};__webpack_require__.r=function(exports){Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=210)})({210:function(module,exports,__webpack_require__){"use strict";var _fusioncharts=__webpack_require__(211);var _fusioncharts2=_interopRequireDefault(_fusioncharts);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}FusionCharts.addDep(_fusioncharts2["default"])},211:function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;
/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts, Inc.
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts, Inc.
 * @meta package_map_pack
 * @id fusionmaps.SouthernAsia.18.10-17-2012 10:42:20
 */var M="M",L="L",Z="Z",Q="Q",LFT="left",RGT="right",CEN="center",MID="middle",TOP="top",BTM="bottom",geodefinitions=[{name:"SouthernAsia",revision:18,standaloneInit:true,baseWidth:640,baseHeight:439,baseScaleFactor:1,entities:{93:{outlines:[[M,323.6,20.8,Q,319.85,21.5,317.85,24.15,316.15,25.45,315.85,26.85,312.4,29.6,312,33.95,307.45,33.3,305.25,35.85,304.45,36.75,303.45,37.45,303.15,38.75,301.95,38.75,298.4,39.05,295.9,39.05,294.05,39.05,292.45,39.45,290.85,40.05,290.35,40.1,288.1,40.05,285.8,39.85,284.9,37.75,284.9,36.7,284.55,37.4,283.7,37.95,280.45,38.45,277.25,38.55,273.7,38.6,270.4,38.3,268.45,38.15,266.65,37.85,266.05,37.75,265.05,37.05,263.5,36.15,260.1,36.75,256.95,36.95,254.05,37.05,251.5,37.15,248.9,38.85,247,39.35,247.3,42.9,246.15,43.9,245.8,46.95,245.15,47.5,244.9,48.15,244.25,49.45,242.25,51.45,241.15,52.05,240.45,52.7,238.4,54.4,236.5,55.4,235.9,55.7,234.7,56.4,234,57.5,232.9,57.6,229.15,57.9,226.95,59.85,225.5,60.95,223.6,63.25,223.7,64.85,222.8,65.3,222.3,65.55,221.2,66.4,218.15,67.5,216.05,64.15,215.3,62.35,212.7,61.75,211.3,61.1,209.7,61.35,207.35,61.55,205.7,60.65,205.65,62.65,205.65,64.65,205.75,66.65,204.85,68.3,204.15,71,202.15,71.4,198.9,75.05,196.8,78.4,195.65,82.4,196.3,85.95,196.35,86.65,197.3,87.25,200.5,87.55,200.2,89.95,199.9,94.4,196.5,95.3,195.75,98.3,197,98.75,198.1,99.15,198.3,100.05,198.6,105.1,198.7,109.65,198.7,111.55,199.9,112.95,203.95,112.75,206.05,114.35,207.15,115.15,208.6,115.7,209.5,119,209.3,122.25,209.2,125.45,208.7,128.7,205.55,130.7,205.45,132.8,205.15,134.3,204.95,134.65,203.95,135.35,203.55,135.85,201.6,136.55,201.35,138.35,201.1,140.15,203.15,140.9,208.05,138.95,212.7,139.15,213.7,139.25,214.75,139.75,217.05,141.05,219.8,140.65,220.8,140.55,221.5,141.1,231.85,141.3,241.45,141.3,249.5,141.3,257.6,141.1,260.5,140.15,261.7,138.85,263.9,136.75,265.05,135.15,265.75,134.1,265.85,132.7,266.65,127.45,267.15,122.65,269.25,120.3,271.7,118.7,273.4,117.45,274.8,116.8,279.55,116.6,283.2,116.2,286,113.75,287.7,112.85,288.8,111.85,289.35,111.55,290.15,111,290.95,110.85,293.25,110.9,293.95,111.35,298.1,111.55,301.35,111.05,301.95,108,301.85,105.5,301.8,103.35,302.85,102.35,304.75,99.55,306.55,98.15,309.2,95.1,311.5,93.4,312.9,92.25,312.8,90.35,312.9,87.45,312.4,85.85,312,83.1,314.05,83.1,317.05,82.8,319.55,83,322.35,83.2,322.9,81.2,323.1,80.1,323.1,78.8,323.05,76.75,323.3,74.75,323.6,71.9,326.65,70.2,328.45,69.1,329.45,67.6,329.85,62.95,328.75,60.55,328.45,59.95,328.15,59.15,327.2,56.8,326.3,55.4,326.5,52.95,328.05,51.85,329.15,50.85,329.65,50.65,330.65,50.35,331.65,50.05,332.55,49.65,333.8,48.65,335.25,47.35,334.6,44.35,332.7,44.9,331.15,44.7,328.35,44.4,328.25,41.1,328.1,38.35,328.85,36.05,329.55,33.7,329.05,30.9,327.85,28.45,326.55,26.95,Q,323.5,24.75,323.6,20.8,Z]],label:"Afghanistan",shortLabel:"AF",labelPosition:[265.4,81.05],labelAlignment:[CEN,MID]},96:{outlines:[[M,547,196.8,Q,546.45,196.3,545.25,195.6,544.75,195.1,544.25,194.4,543.95,194.1,543.35,192.8,542.7,190.75,542.35,187.45,539.3,186.95,536.3,185.35,533.55,183.9,529.35,183.7,528.8,183.7,527.2,184.3,525.8,184.7,524.7,186.65,525.2,188.65,526.4,189.65,527.1,190.25,527.9,190.65,530,191.75,530.35,195.3,530.35,195.8,529.35,196.4,528.7,196.6,527.2,197.95,526.9,200.15,526.7,202.35,526.3,208.1,530.05,213.05,532.15,214.45,531.95,217,531.85,219.5,531.55,222.5,531.35,223.5,531.25,224.55,531.15,226.25,531.85,227.05,532.45,227.85,533.35,229.1,533.75,234.7,534.9,239.15,538.2,237.65,541.45,238.05,541.9,238.15,543.45,237.35,544.25,237.15,544.85,236.95,545.65,236.5,547.8,236.45,548.25,236.15,549.5,235.55,551.6,234.8,551.7,232.6,551.8,231.6,552.5,230.3,555.7,229.75,559.45,230.8,560.25,231.2,561.6,231.1,563.2,230.95,563.8,232,564.7,233.9,566.95,235.65,567.15,241.15,567.15,246.7,567.1,247.2,568.05,248.35,568.65,248.7,570.25,250.15,570.95,250.55,571.65,250.65,573.45,251.05,574.7,250.25,575.5,249.6,577.6,247.7,577.7,242.7,577.5,236.8,577.5,236.7,577.5,236.6,577.5,236.4,577.5,236.25,576.5,234.3,576.7,231.6,576.9,228.65,574.6,226.45,574.15,224.55,574.4,222.5,574.6,220,571.35,219,570.05,219.5,569.55,221.5,569.45,222.3,568.65,224.15,567.95,224,567.15,224.25,564.6,224.6,564.8,222.5,565.2,219.8,562.8,218.3,561.7,217.05,559.7,215.85,558.45,213.05,560.2,210.15,561.5,209,563.2,207.5,565.1,206.9,567.15,205.6,569.85,204.85,571.95,202.85,572.25,201.65,571.85,199.85,571.65,199.35,570.85,198.65,569.85,197.8,568.65,197.85,560.05,197.8,551.5,198.05,Q,548.5,198,547,196.8,Z]],label:"Bangladesh",shortLabel:"BD",labelPosition:[545.75,217.2],labelAlignment:[CEN,MID]},97:{outlines:[[M,559.7,163.25,Q,557.45,162.35,555.55,160.65,554.6,160.45,554.25,159.85,553.4,158.7,552.5,158.5,551.8,158.4,551,158.4,549,158.4,546.25,159.85,545.95,160.8,545.15,162.05,543.75,164.35,542.35,166.4,540.7,168.8,537.9,168.9,535.8,169,534.6,167.5,534.35,168.15,534.25,169,534.05,169.8,533.55,171.1,533.25,174.75,534.15,176.15,534.85,177.05,535.4,177.05,537.8,177.15,539.9,177.75,542.85,179.25,545.45,179.5,550.7,179.8,555.55,178.8,556.55,178.55,557.55,178.55,563.9,178.55,570.15,178.35,570.95,177.05,571.45,176.35,575.1,173.1,574.8,168.5,574.65,166.45,574.9,164.45,575.65,163.5,575.7,162.9,574.7,162.85,573.7,162.85,570.45,162.65,567.15,163.75,Q,563.7,164.35,559.7,163.25,Z]],label:"Bhutan",shortLabel:"BT",labelPosition:[554.55,170.75],labelAlignment:[CEN,MID]},104:{outlines:[[M,425.4,81.4,Q,426.85,80.45,426.5,77.75,427.2,77.25,426.4,75.75,424.1,73.15,422.4,71.65,421.35,71.4,420.85,71.65,419.45,72.3,418.45,73.35,417.65,74.05,416.15,74.45,410.9,74.65,407.15,74.85,405.85,76.05,403.65,75.85,401.6,75.65,399.6,75.45,396.55,73.85,394.85,71.3,392.65,70.2,392.05,69.6,391.05,68.6,389.65,67.4,388.1,65.45,387.2,64.25,385.65,63.05,384.75,63.05,384.6,63,384.5,63.05,382.25,63.05,378.95,62.85,377.4,62.85,376.95,62.05,375.5,59.9,371.8,58.7,368.25,58.8,366.85,57.9,364,57.5,361.8,57.6,359.8,57.6,358.2,58.3,355.35,59.3,353.65,60.95,351.7,62.75,349.8,64.15,348.4,65.05,348.7,67.6,348.9,69,349.7,70.1,350.9,71.5,352.75,72.65,353.65,73.2,354.15,73.95,355.25,75.45,355.75,75.75,359.2,77.95,361.9,82.1,362.4,82.8,363.8,82.7,364.8,82.6,365.05,83.7,366.15,86.55,365.95,89.25,365.85,91.25,365.65,93.3,364.5,95.5,362.8,96,362,97.3,361.5,97.95,361,98.65,360.7,99.35,359.45,103.55,362.8,103.2,365.4,103.45,366.25,104.7,370.55,104.45,369.95,108.4,369.85,109.4,369.45,110.25,369.1,110.3,368.8,110.35,368.4,110.4,368.1,110.45,367.1,111.2,365.95,112.55,365.3,113.25,365.65,114.15,366.95,117.9,366.35,123.35,363.4,125.25,360.4,127.25,360.2,127.55,359.1,127.95,357.75,129.15,355.45,131.4,354.35,132.6,353.15,134.75,352.6,135.75,351.2,138.15,350.6,138.65,349.2,140.25,348.7,141.05,347.7,142.3,347.1,142.9,346.4,143.5,345.45,144.1,344.25,144.8,342.95,145.6,342.45,147,342.25,147.4,341.15,148.75,340.2,150.15,338.2,151.95,335.6,155.1,333.2,157.5,331.75,158.9,329.25,160.55,328.2,162.05,326.2,163.65,324.4,165.05,321.1,164.45,320.15,164.35,319.05,164.05,318.35,163.85,317.55,163.75,314.35,163.25,311.1,164.65,310.6,165.95,308.6,167.2,307.05,168.8,305.65,170.6,305.65,172,303.75,173.25,303.2,173.65,303.65,176.05,303.85,177.05,305.45,176.85,307.15,176.75,308.4,177.75,309.7,178.85,311.3,179.7,311.6,182,311.4,184.2,311.2,186.1,312.1,187.15,313,188.25,314.25,189.95,316.15,192.95,319.15,197.2,320.15,198.7,321,200.35,321.35,201.25,322.5,201.95,324.3,203.25,323.6,206.9,319.05,207.4,314.05,207.5,313.8,208.9,312,208.5,307.95,207.6,302.85,208.5,302.35,209.7,301.45,209.8,299.2,209.9,296.9,209.8,294.75,209.8,293.65,211.75,293.05,212.65,291.85,214.35,290.6,214.95,289.85,216.25,288.9,216.25,288.2,216.9,286.7,218.1,284.8,218.5,288.3,219.8,288.3,223.55,289.2,225.65,290.85,225.75,291.65,225.85,292.35,226.15,293.75,226.75,295.3,227.05,296.4,227.35,297.5,227.85,299.1,228.75,301.45,228.65,304.45,228.55,307.45,228.35,309.45,227.75,310.5,227.55,310.7,230.8,308,230.3,306.95,230.05,306.35,230.5,305.75,230.9,304.95,231,304.05,231.15,303.65,231.9,300.9,232.5,298.9,232.4,296.4,232.4,295.1,233.8,295.25,236.7,297.2,237.95,300,241.65,302.25,245.3,302.95,246.5,303.35,246.8,303.95,247.5,304.55,248.05,305.85,249.15,307.45,249.55,308.85,249.8,309.4,250.85,311.1,253.95,315.55,254.4,318.05,254.65,320.05,253.85,321.45,253.25,323.3,251.95,327.1,251.45,327.35,248.75,328.65,246.1,329.65,244.7,331.25,242.55,332.15,241.15,332.65,239.65,332.9,238.65,334.4,236.2,336.7,234.1,337.8,235.9,337.6,239.15,337.2,243.5,339,246.8,339.2,256.1,339.25,264.35,339.35,271.2,339.45,277.95,341.25,282.1,340.75,286.55,340.4,289.05,342.05,290.75,342.55,291.35,342.75,292.1,344.05,295.8,345.15,299.15,345.35,299.95,345.35,300.65,345.45,302.35,346,304.05,346.4,305.15,346.6,306.2,346.9,307.5,346.9,308.7,346.85,311.8,348.2,313.85,349.6,315.95,352.75,317.4,354.75,319.9,355.85,322.3,357.35,325.95,359.2,328.15,359.7,329.25,359.9,329.45,362.2,332.1,362.6,336.55,362.9,339.05,363.1,341.05,363.6,343.35,363.4,344.6,363.3,345.7,363.8,346,363.9,349,364.65,351.15,365.5,354.75,366.85,356,367.65,357.6,368.85,358.1,369.1,358.65,369.4,359.1,370.15,360.1,371.6,362.05,373.5,363.25,374.5,366.65,374.7,368.35,375.9,370.7,376.1,373.9,378.05,376.85,378.1,377.25,378.95,378.35,381.65,381.9,384.3,386.75,385.9,388.45,385.8,390.85,385.7,393.7,385.5,396.4,385.2,399.3,387.2,401.45,390.85,404.45,395.8,408,398.6,408.9,400.7,407.8,401.5,407.4,401.5,406,402.6,403.95,402.55,401.95,402.4,399.8,404.35,398.4,405.95,396.5,407.85,396.6,410.7,395.4,412.2,393.2,412.9,392.15,413.3,391.75,414.7,390.45,416.35,389.15,417.55,387,419.15,385.5,419.95,384.8,420.55,383.9,422.05,382,422.8,380.7,423.4,379.65,424.9,379.25,425,369.45,425.2,360.1,427,356.9,428.45,355,430.65,352.15,429.95,348,429.55,345.8,428.95,343.5,428,340.75,427.75,337.95,427.65,336.7,427.55,335.4,427.5,329.15,427.75,322.8,427.85,322.1,427.85,321.3,428,318.55,429.65,316.25,430.95,314.35,433.6,314.65,436.4,315.15,437.7,313.85,438.7,312.9,440.05,312.45,441.15,311.5,441.65,311.25,442.95,310.4,443.85,308.8,445.85,305.45,449.2,305.7,451.6,305.85,452.85,304.15,453.55,303.15,454.05,302.05,454.55,300.65,454.55,300.15,454.65,298,455.75,297.2,456.95,296.4,458.25,296,461,294.9,462.6,294.2,463.6,293.35,464.2,292.9,466.5,291.45,468.05,289.65,469.55,287.85,471.8,286.75,472.9,285.8,473.3,285.4,474.6,284,475.4,282,476.8,280.55,477.6,279.05,478.2,277.65,478.75,276.55,479.75,275.45,480.15,275.15,480.75,274.45,481.25,273.75,484.05,271.3,485.6,268.9,488,267.05,490.55,266.55,491.55,266.35,492.55,266.35,494.25,266.35,496.05,266.15,499.7,264.75,500.9,263.15,501.4,262.65,501.8,261.95,502.4,260.8,503.25,260.55,507.25,258.5,508.95,253.65,509.15,249.4,509.6,246.3,514.2,242.75,518.65,240.95,520.75,240.45,521.8,240.75,525.6,241.95,527.3,244.2,527.9,245.1,529.85,244.9,532.05,244.7,532.95,242.7,533.75,240.65,534.9,239.15,533.75,234.7,533.35,229.1,532.45,227.85,531.85,227.05,531.15,226.25,531.25,224.55,531.35,223.5,531.55,222.5,531.85,219.5,531.95,217,532.15,214.45,530.05,213.05,526.3,208.1,526.7,202.35,526.9,200.15,527.2,197.95,528.7,196.6,529.35,196.4,530.35,195.8,530.35,195.3,530,191.75,527.9,190.65,527.1,190.25,526.4,189.65,525.2,188.65,524.7,186.65,525.8,184.7,527.2,184.3,528.8,183.7,529.35,183.7,533.55,183.9,536.3,185.35,539.3,186.95,542.35,187.45,542.7,190.75,543.35,192.8,543.95,194.1,544.25,194.4,544.75,195.1,545.25,195.6,546.45,196.3,547,196.8,548.5,198,551.5,198.05,560.05,197.8,568.65,197.85,569.85,197.8,570.85,198.65,571.65,199.35,571.85,199.85,572.25,201.65,571.95,202.85,569.85,204.85,567.15,205.6,565.1,206.9,563.2,207.5,561.5,209,560.2,210.15,558.45,213.05,559.7,215.85,561.7,217.05,562.8,218.3,565.2,219.8,564.8,222.5,564.6,224.6,567.15,224.25,567.95,224,568.65,224.15,569.45,222.3,569.55,221.5,570.05,219.5,571.35,219,574.6,220,574.4,222.5,574.15,224.55,574.6,226.45,576.9,228.65,576.7,231.6,576.5,234.3,577.5,236.25,L,577.7,236.6,Q,577.8,236.65,577.9,236.75,578,236.85,578.2,236.95,578.8,237.05,579.25,237.15,581.95,237.3,582.65,235.1,582.85,234.4,582.85,233.6,582.75,230.8,584.35,229.8,585.35,229.15,585.6,228.05,585.9,226.85,585.9,225.55,585.85,223.3,586,221,586.25,219.3,587.1,218.3,586.9,214.75,588.2,213.75,590.9,211.15,593.85,211.35,596.35,211.45,598.8,210.95,599.7,209.4,600.5,208.4,601.5,206.7,601.6,205.9,602.3,203.55,603.1,201.95,605,198.9,605.65,196.8,607.25,194.5,608.35,193.2,610.65,190.25,610.1,186.25,609.75,184.5,610.3,183.6,611.7,180.9,614.9,179.5,616.4,178.75,617.15,177.65,618.35,174.75,621.05,173.95,621.95,172,624.1,172.1,626.4,172.1,628.5,171.7,629.9,170.9,629.95,170.6,630.3,169.2,631.15,168.1,631.65,167.05,631.65,166.6,631.85,166.35,632.25,166.2,632.45,166.05,632.55,165.95,632.85,165.75,633.35,165.55,633.45,165.25,633.85,164.15,634.55,163.15,636.4,162.55,635.75,161.2,635.85,159,635.85,158.7,635.9,158.4,636.05,156.5,634.65,155.6,631.95,155.4,629.15,155.2,628.4,155.2,627.6,155.1,624.55,154.55,625,151.35,625.2,149.15,624.9,146.8,624.8,145.7,623.8,144.6,622.05,143,619.55,143.5,619.15,143.6,617.75,144,616.4,145.3,614.9,146.9,612.6,147.3,610,147.35,606.45,147.35,602.9,147.15,599.75,146.9,596.85,149.35,596.75,150.45,595.65,150.85,595.85,152.55,593.55,153.05,592.95,153.75,591.75,154.7,590.5,155.45,589.4,156.5,587.2,158.5,585.7,159.85,584.75,160.75,584.35,161.55,583.75,162.75,582.25,162.85,579,162.95,575.7,162.9,575.65,163.5,574.9,164.45,574.65,166.45,574.8,168.5,575.1,173.1,571.45,176.35,570.95,177.05,570.15,178.35,563.9,178.55,557.55,178.55,556.55,178.55,555.55,178.8,550.7,179.8,545.45,179.5,542.85,179.25,539.9,177.75,537.8,177.15,535.4,177.05,534.85,177.05,534.15,176.15,533.25,174.75,533.55,171.1,534.05,169.8,534.25,169,534.35,168.15,534.6,167.5,534.5,165.25,534.4,162.95,534.35,161.95,533.85,159.85,527.5,159.1,525.8,164.75,525.1,165.95,524.7,166.4,523.35,167.8,523.3,169.5,523.3,171.5,523,174.55,522.75,178.05,522.7,182.1,517.95,182.6,513.2,182.6,512.5,182.6,510.6,181.9,507.95,181,505.65,179.3,503.3,179.25,501.1,178.05,500.5,177.45,498.6,177.35,495.65,177.35,493.05,176.75,491.5,176.45,489.1,175.85,486.4,174.05,481.95,172.75,479.45,172.6,476.3,170.9,472.9,170.5,469.35,170.5,467.85,170.5,466.35,170.3,464,170,461.5,167.8,461.3,167.5,460.3,166.5,458.45,165.45,455.35,163.35,453.8,161.95,451.4,161.75,450.7,161.1,449.2,161.15,446.45,161.25,444.25,160.35,443.95,160.2,442.85,158.8,442.45,157,440.65,156.5,439.3,156.1,438,155.6,435.7,154.55,433.05,154.5,430.75,154.3,431.45,150.75,432.35,148.15,432.25,144.3,432.15,142.8,433.25,140.65,434.25,140.15,435.5,138.05,436.6,137.75,437.8,136.05,438.6,134.75,439.4,132.05,438.4,132,437.4,132,435.9,129.8,432.55,128.8,428.7,126.65,423.8,123.45,423.2,122.75,421,122.05,419.65,121.6,419.05,121,417.95,119.7,415.65,117.1,415.55,116.35,415.35,115.55,414.7,113.65,414.5,111.55,414.15,110.6,413.8,110.45,412.4,109.3,410.8,109,409.75,106.9,410.2,104,412.2,102.95,413.2,102.85,413.9,102.75,414.6,102.35,415.6,101.85,416.65,101.35,417.45,100.95,418.15,100.35,418.75,99.65,419.75,98.45,420.45,97.7,421.5,96.5,422.4,95.6,423,95.1,424.8,93.7,424.6,90.9,424.4,86.85,424.6,82.8,Q,425.1,81.6,425.4,81.4,Z]],label:"India",shortLabel:"IN",labelPosition:[412,233],labelAlignment:[CEN,MID]},106:{outlines:[[M,174.3,32.5,Q,172.9,30.9,170.85,28.05,169.65,27.9,167.35,27.65,163.6,27.65,160.3,26.85,159.3,26.55,158.35,26.15,156.75,25.35,155.55,24,153.85,22.3,151.2,22.9,150.5,23.15,149.7,23.1,146.7,23.35,144.65,25.55,141.25,25.45,138.1,26.35,137.1,26.65,135.3,27.55,134.8,28.3,133.45,28.65,133.1,28.85,131.85,29.55,131.45,29.8,131.05,30.1,L,131.05,30.15,130.8,30.35,Q,130,31.2,129.25,32.5,128.15,34.5,125.5,34.4,124,34.4,122,34.7,119.55,35.1,117.45,35.9,118.45,37.25,118.35,39.45,116.15,40.25,112.8,41.65,112,42.05,111.4,42.95,111,43.8,109.7,45.2,109.2,45.9,107.85,45.9,106.05,46,104.35,46,94.45,46,84.7,46,82.15,46.1,80.15,45,79.15,44.5,78.45,43.8,77.95,43.3,77.4,42.65,76.1,41.35,75,38.45,74.2,37.35,72.1,37.45,70.2,37.45,68.65,38.55,66.75,40.05,62.7,39.15,60.6,37.85,58.55,35.3,56.95,33.4,56.25,29.95,55.65,28.15,56.05,25.35,56.25,23.35,54.45,21.3,53.45,21.35,52.8,20.85,51.7,20.05,51.6,17.75,51.55,15.55,51.2,12.45,50.1,10.85,48.5,7.6,48.2,6.7,47.6,6,46.9,5.3,45.85,5.15,42.35,4.9,38.6,6.3,38.45,7,37.6,8.8,36.4,9.4,36,10.8,35.6,11.85,33.8,13.05,32.4,13.15,30.75,13.25,29.2,13.35,27.45,13.45,25.95,14.95,22.3,14.55,20.1,13.35,17.05,9.6,15.85,9.3,14,7.9,12.5,7.3,11.2,5.6,9.9,3.7,6.65,4.35,4.95,6.9,3.85,8.7,3.55,10.55,3.45,11.75,3.25,14.35,5.85,15.25,5.95,23.85,6.15,31.9,7.8,34.8,8.5,36.4,8.6,38.75,9.4,39.15,10.1,39.55,11.5,41.45,12.6,42.8,13.2,45.9,14.05,47.7,15.15,50.05,15.35,50.35,16.25,51.35,17.65,52.25,20.05,53.55,22.9,55.1,24.7,56.4,25.65,57,25.6,57.6,25.6,60.45,25.7,63.15,25.85,64.55,25,64.95,24.5,65.25,23.9,66.05,23.4,66.65,23.3,67.65,23.2,68.5,22.9,69.1,22.7,70,22.3,70.8,21.9,71.5,21.4,72.1,19.35,74.45,17.45,77.15,16.35,78.25,16.25,80.75,15.95,82.2,16.65,82.7,17.55,83.3,18.55,84.6,19.7,85,20.45,85.9,21.6,87.35,23,88.95,25,91.45,27.95,93.45,29.25,95.4,31.95,97,33.3,99.05,35.1,100.55,35.9,101.15,36.7,101.95,37.4,102.65,38.1,103.55,38.5,103.95,39.6,104.65,41.45,105.7,43.25,108.1,43.8,111.5,43.65,115.05,43.65,118,44.85,120.9,45.7,121.5,45.55,123.9,47.9,126.35,49.8,129.15,52.95,129.15,55.95,129.35,58.7,129.75,59.8,130.85,60.3,131.5,60.9,131.9,61.8,132.5,62.2,133,63.35,133.7,63.5,134.2,64.05,134.9,65.45,135.5,68.15,137.75,70.05,138.35,72.1,139.05,73.3,141.15,75.4,144.1,75.9,145.4,77.05,148.65,77.6,150.35,78.25,151.85,79.45,152.65,81.45,155.5,83.05,157.5,83.8,158.5,84.6,159.4,85.3,160.2,86.1,160.6,87,161,87.1,161.8,88.1,164.25,88.6,165.05,89.75,166.85,91.15,167.55,92.75,168,93.75,168.05,96.5,168.2,98.4,169.9,99.1,170.5,99.8,170.9,103.75,172.9,106.95,175.3,107.7,175.85,108.35,176.05,110.3,176.85,111.3,178.25,114.85,179.05,117.05,179.85,125.6,180.3,133.05,179.45,134.3,179.3,135.5,178.85,138.1,177.95,141.15,177.45,143.35,177.05,144.75,175.65,145.55,174.95,146.65,174,148.4,172.6,149,173.2,150.6,174.65,151.3,176.05,152.65,178.65,153.35,181.55,154.55,185.4,154.45,188.65,154.35,190.05,155.35,190.45,156.05,190.65,156.75,190.85,157.9,192.05,159.8,191.85,162.1,191.7,164.3,191.45,166.55,191.25,168.35,192.25,171.4,194.1,174.4,193.95,175.4,194,176.4,193.95,182.3,194.2,188,194.05,191.35,194,194.05,195.2,195.65,195.8,197.6,196.8,203.65,197.2,209.15,197.2,210.7,197.2,211.9,196.6,212.4,193.6,211.4,192.45,211,190.65,210.9,189.65,210.7,188.45,210.7,187.1,210.7,185.8,212.2,185.1,214.2,184.2,215,182.5,215.75,181.4,216.2,181.15,219.05,180.5,221.75,179.45,223.5,178.75,226.3,178.95,228.45,179.15,229.15,177.95,229.25,175.25,229.15,173.5,229.15,172.5,228.3,172,226.1,170.3,224.8,166.95,223.7,164.35,223.8,161.9,223.8,159.9,223.8,157.9,223.8,157.3,222.9,156.7,220.05,154.9,217.35,153.55,215.15,151.65,213.2,150.35,212.7,148.55,211.2,148.6,210.5,148.65,209.65,148.5,207.95,148.45,207.35,147.2,206.95,146.1,206.65,145.8,205.45,144.6,204.95,143.35,204.65,141.85,203.1,140.85,201.1,140.15,201.3,138.35,201.6,136.55,203.5,135.8,203.95,135.35,204.95,134.6,205.15,134.3,205.45,132.8,205.55,130.7,208.65,128.65,209.2,125.45,209.25,122.2,209.5,119,208.55,115.65,207.15,115.15,206.05,114.35,203.95,112.75,199.9,112.95,198.7,111.55,198.7,109.6,198.6,105.1,198.3,100.05,198.1,99.15,196.95,98.7,195.75,98.3,196.45,95.3,199.9,94.4,200.2,89.95,200.5,87.55,197.25,87.2,196.35,86.65,196.25,85.9,195.65,82.4,196.75,78.35,198.9,75.05,202.1,71.4,204.15,71,204.85,68.25,205.75,66.65,205.65,64.65,205.65,62.65,205.7,60.6,205.75,58.6,205.85,56.6,206.05,52.05,204.15,47.5,203.35,46.6,201.1,45.7,199.6,45.5,198.1,45.4,197.1,45.3,196.05,45,194.95,44.7,193.25,43.8,192.15,42.7,191,41.45,189.5,39.85,187.6,37.85,186.9,35.95,184.45,35.3,181.85,34.7,179.45,34.5,178.05,34.4,175.8,33.3,Q,175,33.2,174.3,32.5,Z]],label:"Iran",shortLabel:"IA",labelPosition:[116.3,100.7],labelAlignment:[CEN,MID]},115:{outlines:[[M,483.45,152.45,Q,480.85,150.95,478.45,149.75,478,148.2,477,147.75,476.7,147.6,476.2,146.4,475.5,145.1,474.6,144.1,473.1,142.7,469.95,142.1,466.1,140.55,463.3,137.25,461.1,134.7,458.25,133.2,457.25,132.7,456.25,132.6,448.1,132.25,439.4,132.05,438.6,134.75,437.8,136.05,436.6,137.75,435.5,138.05,434.25,140.15,433.25,140.65,432.15,142.8,432.25,144.3,432.35,148.15,431.45,150.75,430.75,154.3,433.05,154.5,435.7,154.55,438,155.6,439.3,156.1,440.65,156.5,442.45,157,442.85,158.8,443.95,160.2,444.25,160.35,446.45,161.25,449.2,161.15,450.7,161.1,451.4,161.75,453.8,161.95,455.35,163.35,458.45,165.45,460.3,166.5,461.3,167.5,461.5,167.8,464,170,466.35,170.3,467.85,170.5,469.35,170.5,472.9,170.5,476.3,170.9,479.45,172.6,481.95,172.75,486.4,174.05,489.1,175.85,491.5,176.45,493.05,176.75,495.65,177.35,498.6,177.35,500.5,177.45,501.1,178.05,503.3,179.25,505.65,179.3,507.95,181,510.6,181.9,512.5,182.6,513.2,182.6,517.95,182.6,522.7,182.1,522.75,178.05,523,174.55,523.3,171.5,523.3,169.5,523.35,167.8,524.7,166.4,525.1,165.95,525.8,164.75,523.1,164.95,518.85,164.75,516.75,164.15,512.8,164.65,510.6,165.25,508.15,165.35,505.3,165.45,502.6,163.45,500.9,161.35,499.6,160.55,496.95,159,493.05,158.1,489.7,158.1,486.6,156.3,Q,484.75,154.35,483.45,152.45,Z]],label:"Nepal",shortLabel:"NP",labelPosition:[478.55,162.7],labelAlignment:[CEN,MID]},116:{outlines:[[M,362.7,37.15,Q,357.85,35,353.35,36.35,347.2,36.45,343.55,39.35,341.85,40.05,341.05,41,339.6,42.6,337.6,43.4,337,43.6,336.2,43.8,335.35,44.15,334.6,44.35,335.25,47.35,333.8,48.65,332.55,49.65,331.65,50.05,330.65,50.35,329.65,50.65,329.15,50.85,328.05,51.85,326.5,52.95,326.3,55.4,327.2,56.8,328.15,59.15,328.45,59.95,328.75,60.55,329.85,62.95,329.45,67.6,328.45,69.1,326.65,70.2,323.6,71.9,323.3,74.75,323.05,76.75,323.1,78.8,323.1,80.1,322.9,81.2,322.35,83.2,319.55,83,317.05,82.8,314.05,83.1,312,83.1,312.4,85.85,312.9,87.45,312.8,90.35,312.9,92.25,311.5,93.4,309.2,95.1,306.55,98.15,304.75,99.55,302.85,102.35,301.8,103.35,301.85,105.5,301.95,108,301.35,111.05,298.1,111.55,293.95,111.35,293.25,110.9,290.95,110.85,290.15,111,289.35,111.55,288.8,111.85,287.7,112.85,286,113.75,283.2,116.2,279.55,116.6,274.8,116.8,273.4,117.45,271.7,118.7,269.25,120.3,267.15,122.65,266.65,127.45,265.85,132.7,265.75,134.1,265.05,135.15,263.9,136.75,261.7,138.85,260.5,140.15,257.6,141.1,249.5,141.3,241.45,141.3,231.85,141.3,221.5,141.1,220.8,140.55,219.8,140.65,217.05,141.05,214.75,139.75,213.7,139.25,212.7,139.15,208.05,138.95,203.15,140.9,204.65,141.85,204.95,143.4,205.45,144.6,206.65,145.8,206.95,146.1,207.4,147.25,207.95,148.45,209.7,148.55,210.5,148.65,211.2,148.65,212.7,148.55,213.25,150.35,215.15,151.65,217.35,153.6,220.05,154.9,222.9,156.7,223.8,157.3,223.8,157.9,223.8,159.9,223.8,161.95,223.7,164.35,224.8,167,226.1,170.3,228.35,172,229.15,172.5,229.15,173.55,229.25,175.25,229.15,177.95,228.45,179.15,226.35,179,223.5,178.75,221.8,179.5,219.05,180.5,216.25,181.2,215.75,181.4,215.05,182.5,214.2,184.2,212.2,185.15,210.7,185.8,210.7,187.15,210.7,188.45,210.9,189.65,211,190.65,211.4,192.5,212.4,193.6,211.9,196.6,217.25,198.1,223.3,198.05,232.9,197.8,242.45,197.85,252.05,197.85,261.6,197.85,264.1,197.8,266.65,198.05,269.75,200.95,271.3,204.8,273.6,207,274.9,209.3,278.55,212.15,280.85,213.85,282.95,215.35,284.4,216.4,285.2,216.85,284.8,218.5,286.7,218.1,288.2,216.9,288.9,216.25,289.85,216.25,290.6,214.95,291.85,214.35,293.05,212.65,293.65,211.75,294.75,209.8,296.9,209.8,299.2,209.9,301.45,209.8,302.35,209.7,302.85,208.5,307.95,207.6,312,208.5,313.8,208.9,314.05,207.5,319.05,207.4,323.6,206.9,324.3,203.25,322.5,201.95,321.35,201.25,321,200.35,320.15,198.7,319.15,197.2,316.15,192.95,314.25,189.95,313,188.25,312.1,187.15,311.2,186.1,311.4,184.2,311.6,182,311.3,179.7,309.7,178.85,308.4,177.75,307.15,176.75,305.45,176.85,303.85,177.05,303.65,176.05,303.2,173.65,303.75,173.25,305.65,172,305.65,170.6,307.05,168.8,308.6,167.2,310.6,165.95,311.1,164.65,314.35,163.25,317.55,163.75,318.35,163.85,319.05,164.05,320.15,164.35,321.1,164.45,324.4,165.05,326.2,163.65,328.2,162.05,329.25,160.55,331.75,158.9,333.2,157.5,335.6,155.1,338.2,151.95,340.2,150.15,341.15,148.75,342.25,147.4,342.45,147,342.95,145.6,344.25,144.8,345.45,144.1,346.4,143.5,347.1,142.9,347.7,142.3,348.7,141.05,349.2,140.25,350.6,138.65,351.2,138.15,352.6,135.75,353.15,134.75,354.35,132.6,355.45,131.4,357.75,129.15,359.1,127.95,360.2,127.55,360.4,127.25,363.4,125.25,366.35,123.35,366.95,117.9,365.65,114.15,365.3,113.25,365.95,112.55,367.1,111.2,368.1,110.45,368.4,110.4,368.8,110.35,369.1,110.3,369.45,110.25,369.85,109.4,369.95,108.4,370.55,104.45,366.25,104.7,365.4,103.45,362.8,103.2,359.45,103.55,360.7,99.35,361,98.65,361.5,97.95,362,97.3,362.8,96,364.5,95.5,365.65,93.3,365.85,91.25,365.95,89.25,366.15,86.55,365.05,83.7,364.8,82.6,363.8,82.7,362.4,82.8,361.9,82.1,359.2,77.95,355.75,75.75,355.25,75.45,354.15,73.95,353.65,73.2,352.75,72.65,350.9,71.5,349.7,70.1,348.9,69,348.7,67.6,348.4,65.05,349.8,64.15,351.7,62.75,353.65,60.95,355.35,59.3,358.2,58.3,359.8,57.6,361.8,57.6,364,57.5,366.85,57.9,368.25,58.8,371.8,58.7,375.5,59.9,376.95,62.05,377.4,62.85,378.95,62.85,382.25,63.05,384.5,63.05,384.6,63,384.75,63.05,382.95,56.1,382.85,55.6,382.75,53.35,382.85,51.05,382.85,50.9,382.85,50.75,382.85,49.45,382.05,48.55,381.25,47.6,379.75,46.95,376.8,44.3,373.6,43.8,371.05,43.4,370.35,42.6,368.45,42.2,367.85,41.2,367.05,39.95,366.95,39.45,366.55,38.05,366.55,37.8,365.3,37.95,364.45,37.95,Q,363.5,37.95,362.7,37.15,Z]],label:"Pakistan",shortLabel:"PK",labelPosition:[293.95,141.15],labelAlignment:[CEN,MID]},120:{outlines:[[M,437.6,394.8,Q,436.8,393.65,435.5,392.9,435,392.65,433.9,391.45,433.25,390.65,431.95,389.85,430.75,389.15,429.45,388.85,427.4,388.35,427.55,389.85,427.7,392.35,426.8,394.3,425.8,396.4,425.7,399.85,424.8,401.25,424.9,402.95,424.9,403.45,424.3,404.95,424.5,406.25,424.2,407.5,423.7,409.8,423.8,412.55,423.9,417.55,424.2,423.7,424.5,426.85,425.4,428.75,426.3,430.45,427.45,431.3,428.25,431.8,428.95,432.2,430.75,433.1,433.45,434.5,435.4,434.5,437.1,435.6,438.7,436.2,439.5,434.8,441.45,433.5,443.35,431.2,444.05,430.25,445.05,429.75,446.25,429.05,447.7,427.85,448.4,427.25,448.4,426.25,448.5,423.2,448.5,420.2,448.45,418.35,448.8,416.55,449.2,413.3,446.4,411.2,444.35,409.7,443.75,406.5,443.65,405.75,443.45,404.95,442.05,400,438.9,396.5,Q,438.3,395.7,437.6,394.8,Z]],label:"Sri Lanka",shortLabel:"LK",labelPosition:[432.7,412.25],labelAlignment:[CEN,MID]}}}];exports["default"]={extension:geodefinitions,name:"southernasia",type:"maps"}}})});