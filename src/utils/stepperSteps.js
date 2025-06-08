import { SlLocationPin } from 'react-icons/sl'
import { FaRegTrashAlt, FaCreditCard } from 'react-icons/fa'
import { TbTruck } from 'react-icons/tb'
import { LuShield } from 'react-icons/lu'
import { FiCalendar } from 'react-icons/fi'
import { MdOutlinePayment } from 'react-icons/md'

import PostcodeStep from '../components/Stepper/steps/PostcodeStep'
import WasteTypeStep from '../components/Stepper/steps/WasteTypeStep'
import SelectSkipStep from '../components/Stepper/steps/SelectSkipStep'
import PermitCheckStep from '../components/Stepper/steps/PermitCheckStep'
import ChooseDateStep from '../components/Stepper/steps/ChooseDateStep'
import PaymentStep from '../components/Stepper/steps/PaymentStep'

export const stepperSteps = [
  {
    icon: SlLocationPin,
    label: 'Postcode',
    component: PostcodeStep,
  },
  {
    icon: FaRegTrashAlt,
    label: 'Waste Type',
    component: WasteTypeStep,
  },
  {
    icon: TbTruck,
    label: 'Select Skip',
    component: SelectSkipStep,
  },
  {
    icon: LuShield,
    label: 'Permit Check',
    component: PermitCheckStep,
  },
  {
    icon: FiCalendar,
    label: 'Choose Date',
    component: ChooseDateStep,
  },
  {
    icon: MdOutlinePayment,
    label: 'Payment',
    component: PaymentStep,
  },
]
