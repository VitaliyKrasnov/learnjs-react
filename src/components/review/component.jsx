import { CounterContainer } from "../counter/container";

export const ReviewForm = ({ props }) => {
    return (
        <div>
            <div style={{ marginBottom: "10px" }}>
                <div><span>Ваше имя:</span></div>
                <input type="text" value={""} />
            </div>

            <div style={{ marginBottom: "10px" }}>
                <div><span>Отзыв:</span></div>
                <textarea cols={50} rows={3} placeholder="Напишите здесь ваш отзыв о ресторане" />
            </div>

            <div style={{ marginBottom: "20px" }}>
                <span>Рейтинг:</span>
                <CounterContainer min={1} max={5} step={1} />
            </div>

            <div>
                <button>Сохранить</button>
            </div>
        </div>
    );
};
