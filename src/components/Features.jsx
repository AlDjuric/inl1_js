import FeatureGrid from './FeatureGrid';
import HowItWorks from './HowItWorks';
import MoneyTransfer from './MoneyTransfer';
import InternationalPayments from './InternationalPayments';

export default function Features() {
    return (
        <>

            <section id="features">
                <img src="src/assets/features-card.svg" alt="" />
                <FeatureGrid />
            </section>
            <HowItWorks />
            <section id="money-transfer-and-payments">
                <MoneyTransfer />
                <InternationalPayments />
            </section>
        </>
    )
}
