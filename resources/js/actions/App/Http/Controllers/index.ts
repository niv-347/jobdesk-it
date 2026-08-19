import DashboardController from './DashboardController'
import Sop from './Sop'
import Troubleshoot from './Troubleshoot'
import VisumController from './VisumController'
import Konfigurasi from './Konfigurasi'
import ProfileController from './ProfileController'
import AssetController from './AssetController'
import RadiologiController from './RadiologiController'
import RadiologiShareController from './RadiologiShareController'
import VerifikatorController from './VerifikatorController'
import ExportController from './ExportController'
import Settings from './Settings'
const Controllers = {
    DashboardController: Object.assign(DashboardController, DashboardController),
Sop: Object.assign(Sop, Sop),
Troubleshoot: Object.assign(Troubleshoot, Troubleshoot),
VisumController: Object.assign(VisumController, VisumController),
Konfigurasi: Object.assign(Konfigurasi, Konfigurasi),
ProfileController: Object.assign(ProfileController, ProfileController),
AssetController: Object.assign(AssetController, AssetController),
RadiologiController: Object.assign(RadiologiController, RadiologiController),
RadiologiShareController: Object.assign(RadiologiShareController, RadiologiShareController),
VerifikatorController: Object.assign(VerifikatorController, VerifikatorController),
ExportController: Object.assign(ExportController, ExportController),
Settings: Object.assign(Settings, Settings),
}

export default Controllers