import DashboardController from './DashboardController'
import Sop from './Sop'
import Troubleshoot from './Troubleshoot'
import Konfigurasi from './Konfigurasi'
import ProfileController from './ProfileController'
import VerifikatorController from './VerifikatorController'
import ExportController from './ExportController'
import Settings from './Settings'
const Controllers = {
    DashboardController: Object.assign(DashboardController, DashboardController),
Sop: Object.assign(Sop, Sop),
Troubleshoot: Object.assign(Troubleshoot, Troubleshoot),
Konfigurasi: Object.assign(Konfigurasi, Konfigurasi),
ProfileController: Object.assign(ProfileController, ProfileController),
VerifikatorController: Object.assign(VerifikatorController, VerifikatorController),
ExportController: Object.assign(ExportController, ExportController),
Settings: Object.assign(Settings, Settings),
}

export default Controllers