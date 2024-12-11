import FeatureItem from './FeatureItem';

export default function FeatureGrid() {
    const features = [
        { icon: "icon-payment.svg", title: "Easy Payment", description: "Id mollis consectetur congue egestas egestas suspendisse blandit justo." },
        { icon: "icon-security.svg", title: "Data Security", description: "Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non." },
        { icon: "icon-statistics.svg", title: "Cost statistics", description: "Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh." },
        { icon: "icon-support.svg", title: "Support 24/7", description: "Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend." },
        { icon: "icon-cashback.svg", title: "Regular Cashback", description: "Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend." },
        { icon: "icon-standards.svg", title: "Top Standards", description: "Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu." },
    ];

    return (
        <div className="feature-grid">
            <h2>App Features</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                volutpat mollis egestas. Nam luctus facilisis ultrices.
                Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.
            </p>
            {features.map((feature, index) => (
                <FeatureItem key={index} {...feature} />
            ))}
        </div>
    );
}
